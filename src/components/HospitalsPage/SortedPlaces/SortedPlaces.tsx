import React from "react";
import { Card } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Progress, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getSingleDepartmentThunk } from "../../../context/reducers/departmentsReducer";
import { changeCountAPI } from "../../../api/api";
import "./SortedPlaces.css";

type CardWrapperPropsType = {
  departmentId: number,
  busyPercent: number,
  free: number,
  total: number,
  title: string,
  value: number,
  secValue: number,
  gender: string,
  hasOxygen: boolean,
  busy: boolean,
}

const CardWrapper = (props: CardWrapperPropsType) => {
  const {
    departmentId,
    busyPercent,
    free,
    total,
    title,
    value,
    secValue,
    gender,
    hasOxygen,
    busy,
  } = props
  const dispatch = useDispatch();

  return (
    <div className={"card"}>
      <Card style={{ width: 424, height: 224 }}>
        <h1>{title}</h1>
        <div className={"plus_min"}>
          <Button
            onClick={() => {
              changeCountAPI.remove(departmentId, value, secValue, gender, hasOxygen)
              .then(res => {
                dispatch(getSingleDepartmentThunk(departmentId))
              })
            }}
            size="large"
            type="primary"
            shape="circle"
            icon={<MinusOutlined />}
          />
          <div style={{ background: "#F0F2F5", padding: "10px 2px 10px 10px" }}>
            Занято{" "}
            <span
              style={{
                background: "#fff",
                padding: "12px 10px 12px 10px",
                borderRadius: "10px",
                boxShadow:
                  "inset 0 1px 1px rgba(0,0,0,0.1), 0 1px 1px rgba(0,0,0,0.12)",
              }}
            >
              {busy || 0}
            </span>
          </div>
          <Button
            onClick={() => {
              changeCountAPI.add(departmentId, value, secValue, gender, hasOxygen)
              .then(res => {
                dispatch(getSingleDepartmentThunk(departmentId))
                console.log(res)
              })
            }}
            size="large"
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
          />
        </div>
        <div className="progress_bar">
          <Progress percent={busyPercent} />
        </div>
        <div>
          <label>
            Свободно <span style={{ color: " #1890FF" }}>{free || 0}</span>
          </label>
          <p>
            Всего <span style={{ color: " #1890FF" }}>{total || 0}</span>
          </p>
        </div>
      </Card>
    </div>
  );
};

export const SortedPlaces = () => {
  const placesCount = useSelector((state: any) => state.departments.department);

  const maleFree = placesCount?.count_male_free;
  const maleBusy = placesCount?.count_male_busy;
  const maleTotal =
    placesCount?.count_male_free + placesCount?.count_male_busy;

  const femaleFree = placesCount?.count_female_free;
  const femaleBusy = placesCount?.count_female_busy;
  const femaleTotal =
    placesCount?.count_female_free + placesCount?.count_female_busy;

  const maleO2Free = placesCount?.count_male_o2_free;
  const maleO2Busy = placesCount?.count_male_o2_busy;
  const maleO2Total =
    placesCount?.count_male_o2_free +
    placesCount?.count_male_o2_busy;

  const femaleO2Free = placesCount?.count_female_o2_free;
  const femaleO2Busy = placesCount?.count_female_o2_busy;
  const femaleO2Total =
    placesCount?.count_female_o2_free +
    placesCount?.count_female_o2_busy;

  const maleBusyPercent = Math.ceil(
    (placesCount?.count_male_busy /
      (placesCount?.count_male_busy +
        placesCount?.count_male_free)) *
      100
  );

  const femaleBusyPercent = Math.ceil(
    (placesCount?.count_female_busy /
      (placesCount?.count_female_busy +
        placesCount?.count_female_free)) *
      100
  );

  const maleO2BusyPercent = Math.ceil(
    (placesCount?.count_male_o2_busy /
      (placesCount?.count_male_o2_busy +
        placesCount?.count_male_o2_free)) *
      100
  );

  const femaleO2BusyPercent = Math.ceil(
    (placesCount?.count_female_o2_busy /
      (placesCount?.count_female_o2_busy +
        placesCount?.count_female_o2_free)) *
      100
  );

  return (
    <div className={"card_container"}>
      <CardWrapper
        departmentId={placesCount?.id}
        busyPercent={maleBusyPercent}
        free={maleFree}
        total={maleTotal}
        title={"Мужские"}
        value={0}
        secValue={1}
        gender={"MALE"}
        hasOxygen={false}
        busy={maleBusy}
      />

      <CardWrapper
        departmentId={placesCount?.id}
        busyPercent={femaleBusyPercent}
        free={femaleFree}
        total={femaleTotal}
        title={"Женские"}
        value={0}
        secValue={1}
        gender={"FEMALE"}
        hasOxygen={false}
        busy={femaleBusy}
      />

      <CardWrapper
        departmentId={placesCount?.id}
        busyPercent={maleO2BusyPercent}
        free={maleO2Free}
        total={maleO2Total}
        title={"Мужские с кислородом"}
        value={0}
        secValue={1}
        gender={"MALE"}
        hasOxygen={true}
        busy={maleO2Busy}
      />

      <CardWrapper
        departmentId={placesCount?.id}
        busyPercent={femaleO2BusyPercent}
        free={femaleO2Free}
        total={femaleO2Total}
        title={"Женские с кислородом"}
        value={0}
        secValue={1}
        gender={"FEMALE"}
        hasOxygen={true}
        busy={femaleO2Busy}
      />
    </div>
  );
};
