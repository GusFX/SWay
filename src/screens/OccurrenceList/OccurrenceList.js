import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {ScreenView} from './styles';
import {Text} from './styles';

const OccurrenceList = () => {
  const [list, setList] = useState([]);

  const fetchList = useCallback(async () => {
    try {
      const {data: response} = await axios.get(
        'https://s-way.herokuapp.com/api/occurrences',
      );
      console.log('resposta api: ', response);
      if (response.length) {
        setList(response);
      }
    } catch (error) {
      console.error('erro ao buscar lista de ocorrencias: ', error);
    }
  }, []);

  useEffect(fetchList, [fetchList]);

  return (
    <>
      <ScreenView>
        {list.length ? (
          list.map(item => (
            <Text>
              {item.street} : {item.description}
            </Text>
          ))
        ) : (
          <Text>Nenhuma ocorrencia registrada</Text>
        )}
      </ScreenView>
    </>
  );
};

export default OccurrenceList;
