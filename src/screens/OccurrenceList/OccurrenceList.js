import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {ScreenView} from './styles';
import {Text} from './styles';
import {OccurrenceCard} from '../../components';

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

  const getDate = date_hour => {
    return date_hour.split(' ')[0];
  };

  const getHour = date_hour => {
    return date_hour.split(' ')[1];
  };

  useEffect(() => fetchList(), [fetchList]);

  useEffect(() => console.log(list), [list]);

  return (
    <>
      <ScreenView>
        {list.length ? (
          list.map((item, index) => (
            <OccurrenceCard
              key={index}
              date={getDate(item.date_hour)}
              time={getHour(item.date_hour)}
              type={item.type}
              details={item.description}
            />
          ))
        ) : (
          <Text>Nenhuma ocorrencia registrada</Text>
        )}
      </ScreenView>
    </>
  );
};

export default OccurrenceList;
