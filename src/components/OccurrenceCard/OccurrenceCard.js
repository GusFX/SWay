import React from 'react';

import {
  CardView,
  DateText,
  DateTimeView,
  DateView,
  DescriptionView,
  DetailsText,
  DetailsView,
  TimeText,
  TimeView,
  TypeText,
  TypeView,
} from './styles';

const OccurrenceCard = ({date, time, type, details, place}) => {
  return (
    <CardView>
      <DateTimeView>
        <DateView>
          <DateText>{date}</DateText>
        </DateView>
        <TimeView>
          <TimeText>{time}</TimeText>
        </TimeView>
      </DateTimeView>
      <DescriptionView>
        <TypeView>
          <TypeText>
            {type} - {place}
          </TypeText>
        </TypeView>
        <DetailsView>
          <DetailsText>{details}</DetailsText>
        </DetailsView>
      </DescriptionView>
    </CardView>
  );
};

export default OccurrenceCard;
