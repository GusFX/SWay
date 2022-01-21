import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {ScreenView} from './styles';
import {Text} from './styles';
import {OccurrenceCard} from '../../components';

const OccurrenceList = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const crimeTypes = {
    theft: 'Roubo',
    burglary: 'Arrombamento',
    robbery: 'Assalto',
    rape: 'Estupro',
    harassment: 'Assédio',
    strange_behaviour: 'Comportamento Estranho',
    drug_trafficking: 'Tráfico de drogas',
    faction_zone: 'Zona de facção',
    other: 'Outro',
  };

  const fetchList = useCallback(async () => {
    try {
      setIsLoading(true);
      const {data: response} = await axios.get(
        'https://s-way.herokuapp.com/api/occurrences',
      );
      if (response.length) {
        setList(response);
      }
    } catch (error) {
      console.error('erro ao buscar lista de ocorrencias: ', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getDate = date_hour => {
    return date_hour.split(' ')[0];
  };

  const getHour = date_hour => {
    return date_hour.split(' ')[1];
  };

  const getType = type => {
    return crimeTypes[type];
  };

  const getDefaultText = () =>
    isLoading ? (
      <Text>Buscando ocorrencias...</Text>
    ) : (
      <Text>Nenhuma ocorrencia registrada</Text>
    );
  useEffect(() => fetchList(), [fetchList]);

  return (
    <>
      <ScreenView>
        {list.length
          ? list.map((item, index) => (
              <OccurrenceCard
                key={index}
                date={getDate(item.date_hour)}
                time={getHour(item.date_hour)}
                type={getType(item.type)}
                details={item.description}
              />
            ))
          : getDefaultText()}
      </ScreenView>
    </>
  );
};

export default OccurrenceList;
