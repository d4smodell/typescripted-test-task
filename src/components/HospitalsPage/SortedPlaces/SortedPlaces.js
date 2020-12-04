import React, { useCallback, useEffect } from "react";
import { Card } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Progress, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../../context/reducers/changeCountReducer";
import { getSingleDepartmentThunk } from "../../../context/reducers/departmentsReducer";
import "./SortedPlaces.css";

const CardWrapper = ({
  departmentId,
  busyPercent,
  free,
  total,
  title,
  value,
  secValue,
  gender,
  hasOxygen,
}) => {
  const currentDepartment = useSelector(
    (state) => state.departments.department
  );

  const dispatch = useDispatch();

  return (
    <div className={"card"}>
      <Card style={{ width: 424, height: 224 }}>
        <h1>{title}</h1>
        <div className={"plus_min"}>
          <Button
            onClick={() => {
              dispatch(
                remove(departmentId, value, secValue, gender, hasOxygen)
              );
              dispatch(getSingleDepartmentThunk(departmentId || 2));
            }}
            size="large"
            type="primary"
            shape="circle"
            icon={<MinusOutlined />}
          />
          <div style={{ background: "#F0F2F5", padding: "10px" }}>
            Занято{" "}
            <span
              style={{
                background: "#fff",
                padding: "10px 10px",
                borderRadius: "10px",
              }}
            >
              {currentDepartment?.data?.count_male_busy}
            </span>
          </div>
          <Button
            onClick={() => {
              dispatch(add(departmentId, value, secValue, gender, hasOxygen));
              dispatch(getSingleDepartmentThunk(departmentId || 2));
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

export const SortedPlaces = (props) => {
  const placesCount = useSelector((state) => state.departments.department);

  const maleFree = placesCount?.data?.count_male_free;
  const maleTotal =
    placesCount?.data?.count_male_free + placesCount?.data?.count_male_busy;

  const femaleFree = placesCount?.data?.count_female_free;
  const femaleTotal =
    placesCount?.data?.count_female_free + placesCount?.data?.count_female_busy;

  const maleO2Free = placesCount?.data?.count_male_o2_free;
  const maleO2Total =
    placesCount?.data?.count_male_o2_free +
    placesCount?.data?.count_male_o2_busy;

  const femaleO2Free = placesCount?.data?.count_female_o2_free;
  const femaleO2Total =
    placesCount?.data?.count_female_o2_free +
    placesCount?.data?.count_female_o2_busy;

  const maleBusyPercent = Math.ceil(
    (placesCount?.data?.count_male_busy /
      (placesCount?.data?.count_male_busy +
        placesCount?.data?.count_male_free)) *
      100
  );

  const femaleBusyPercent = Math.ceil(
    (placesCount?.data?.count_female_busy /
      (placesCount?.data?.count_female_busy +
        placesCount?.data?.count_female_free)) *
      100
  );

  const maleO2BusyPercent = Math.ceil(
    (placesCount?.data?.count_male_o2_busy /
      (placesCount?.data?.count_male_o2_busy +
        placesCount?.data?.count_male_o2_free)) *
      100
  );

  const femaleO2BusyPercent = Math.ceil(
    (placesCount?.data?.count_female_o2_busy /
      (placesCount?.data?.count_female_o2_busy +
        placesCount?.data?.count_female_o2_free)) *
      100
  );

  const dispatch = useDispatch();
  const handler = useCallback(() => {
    dispatch(getSingleDepartmentThunk(placesCount?.data?.id || 2));
  }, [dispatch, placesCount?.data?.id]);

  useEffect(() => {
    handler();
  }, [handler]);

  return (
    <div className={"card_container"}>
      <CardWrapper
        departmentId={placesCount?.data?.id}
        busyPercent={maleBusyPercent}
        free={maleFree}
        total={maleTotal}
        title={"Мужские"}
        value={0}
        secValue={1}
        gender={"MALE"}
        hasOxygen={false}
      />

      <CardWrapper
        departmentId={placesCount?.data?.id}
        busyPercent={femaleBusyPercent}
        free={femaleFree}
        total={femaleTotal}
        title={"Женские"}
        value={0}
        secValue={1}
        gender={"FEMALE"}
        hasOxygen={false}
      />

      <CardWrapper
        departmentId={placesCount?.data?.id}
        busyPercent={maleO2BusyPercent}
        free={maleO2Free}
        total={maleO2Total}
        title={"Мужские с кислородом"}
        value={0}
        secValue={1}
        gender={"MALE"}
        hasOxygen={true}
      />

      <CardWrapper
        departmentId={placesCount?.data?.id}
        busyPercent={femaleO2BusyPercent}
        free={femaleO2Free}
        total={femaleO2Total}
        title={"Женские с кислородом"}
        value={0}
        secValue={1}
        gender={"FEMALE"}
        hasOxygen={true}
      />
    </div>
  );
};
