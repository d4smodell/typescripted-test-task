import React from "react";
import { Card } from "antd";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Progress, Button } from 'antd';
import { useSelector } from "react-redux";
import "./SortedPlaces.css";

const CardWrapper = props => {
  return (
    <div className={'card'}>
      <Card style={{ width: 424, height: 224 }}>
        <h1>{props.title}</h1>
        <div className={"plus_min"}>
          <Button size='large' type='primary' shape='circle' icon={<MinusOutlined />} />
          Занято
          <Button size='large' type='primary' shape='circle' icon={<PlusOutlined />} />
        </div>
        <div className="progress_bar">
          <Progress percent={47} />
        </div>
        <div>
          <label>Свободно <span style={{ color: ' #1890FF' }}>{props.free || 0}</span></label>
          <p>Всего <span style={{ color: ' #1890FF' }}>{props.total || 0}</span></p>
        </div>
      </Card>
    </div>
  );
};

export const SortedPlaces = (props) => {
  const placesCount = useSelector(state => state.departments.department)

  const maleFree = placesCount?.data?.count_male_free
  const maleTotal = placesCount?.data?.count_male_free + placesCount?.data?.count_male_busy

  const femaleFree = placesCount?.data?.count_female_free
  const femaleTotal = placesCount?.data?.count_female_free + placesCount?.data?.count_female_busy

  const maleO2Free = placesCount?.data?.count_male_o2_free
  const maleO2Total = placesCount?.data?.count_male_o2_free + placesCount?.data?.count_male_o2_busy

  const femaleO2Free = placesCount?.data?.count_female_o2_free
  const femaleO2Total = placesCount?.data?.count_female_o2_free + placesCount?.data?.count_female_o2_busy

  return (
    <div className={"card_container"}>
      <CardWrapper title={'Мужские'} free={maleFree} total={maleTotal} />
      <CardWrapper title={'Женские'} free={femaleFree} total={femaleTotal} />
      <CardWrapper title={'Мужские с кислородом'} free={maleO2Free} total={maleO2Total} />
      <CardWrapper title={'Женские с кислородом'} free={femaleO2Free} total={femaleO2Total} />
    </div>
  );
};
