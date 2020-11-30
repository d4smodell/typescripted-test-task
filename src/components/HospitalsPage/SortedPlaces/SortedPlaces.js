import React, { useCallback, useEffect } from "react";
import { Card } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Progress, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../../context/reducers/changeCountReducer";
import { getSingleDepartmentThunk } from "../../../context/reducers/departmentsReducer";
import "./SortedPlaces.css";

const MaleCardWrapper = (props) => {
  const currentDepartment = useSelector(
    (state) => state.departments.department
  );
  const busyPercent = Math.ceil(
    (currentDepartment?.data?.count_male_busy /
      (currentDepartment?.data?.count_male_busy +
        currentDepartment?.data?.count_male_free)) *
      100
  );
  const dispatch = useDispatch();

  return (
    <div className={"card"}>
      <Card style={{ width: 424, height: 224 }}>
        <h1>{props.title}</h1>
        <div className={"plus_min"}>
          <Button
            onClick={() =>
              dispatch(remove(currentDepartment?.data?.id, 0, 1, "MALE", false))
            }
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
            onClick={() =>
              dispatch(add(currentDepartment?.data?.id, 0, 1, "MALE", false))
            }
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
            Свободно{" "}
            <span style={{ color: " #1890FF" }}>{props.free || 0}</span>
          </label>
          <p>
            Всего <span style={{ color: " #1890FF" }}>{props.total || 0}</span>
          </p>
        </div>
      </Card>
    </div>
  );
};

const FemaleCardWrapper = (props) => {
  const currentDepartment = useSelector(
    (state) => state.departments.department
  );

  const busyPercent = Math.ceil(
    (currentDepartment?.data?.count_female_busy /
      (currentDepartment?.data?.count_female_busy +
        currentDepartment?.data?.count_female_free)) *
      100
  );

  const dispatch = useDispatch();

  return (
    <div className={"card"}>
      <Card style={{ width: 424, height: 224 }}>
        <h1>{props.title}</h1>
        <div className={"plus_min"}>
          <Button
            onClick={() =>
              dispatch(
                remove(currentDepartment?.data?.id, 0, 1, "FEMALE", false)
              )
            }
            size="large"
            type="primary"
            shape="circle"
            icon={<MinusOutlined />}
          />
          <div style={{ background: "#F0F2F5", padding: "10px" }}>
            <span style={{ fontSize: "14px" }}>Занято</span>{" "}
            <span
              style={{
                background: "#fff",
                padding: "10px 10px",
                borderRadius: "10px",
              }}
            >
              {currentDepartment?.data?.count_female_busy}
            </span>
          </div>
          <Button
            onClick={() =>
              dispatch(add(currentDepartment?.data?.id, 0, 1, "FEMALE", false))
            }
            size="large"
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
          />
        </div>
        <div className="progress_bar">
          <Progress percent={busyPercent || 0} />
        </div>
        <div>
          <label>
            Свободно{" "}
            <span style={{ color: " #1890FF" }}>{props.free || 0}</span>
          </label>
          <p>
            Всего <span style={{ color: " #1890FF" }}>{props.total || 0}</span>
          </p>
        </div>
      </Card>
    </div>
  );
};

const MaleO2CardWrapper = (props) => {
  const currentDepartment = useSelector(
    (state) => state.departments.department
  );
  const busyPercent = Math.ceil(
    (currentDepartment?.data?.count_male_o2_busy /
      (currentDepartment?.data?.count_male_o2_busy +
        currentDepartment?.data?.count_male_o2_free)) *
      100
  );

  const dispatch = useDispatch();

  return (
    <div className={"card"}>
      <Card style={{ width: 424, height: 224 }}>
        <h1>{props.title}</h1>
        <div className={"plus_min"}>
          <Button
            onClick={() =>
              dispatch(remove(currentDepartment?.data?.id, 0, 1, "MALE", true))
            }
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
                fontSize: "16px",
              }}
            >
              {currentDepartment?.data?.count_male_o2_busy}
            </span>
          </div>
          <Button
            onClick={() =>
              dispatch(add(currentDepartment?.data?.id, 0, 1, "MALE", true))
            }
            size="large"
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
          />
        </div>
        <div className="progress_bar">
          <Progress percent={busyPercent || 0} />
        </div>
        <div>
          <label>
            Свободно{" "}
            <span style={{ color: " #1890FF" }}>{props.free || 0}</span>
          </label>
          <p>
            Всего <span style={{ color: " #1890FF" }}>{props.total || 0}</span>
          </p>
        </div>
      </Card>
    </div>
  );
};

const FemaleO2CardWrapper = (props) => {
  const currentDepartment = useSelector(
    (state) => state.departments.department
  );
  const busyPercent = Math.ceil(
    (currentDepartment?.data?.count_female_o2_busy /
      (currentDepartment?.data?.count_female_o2_busy +
        currentDepartment?.data?.count_female_o2_free)) *
      100
  );

  const dispatch = useDispatch();

  const plusHandler = useCallback(() => {
    dispatch(remove(currentDepartment?.data?.id, 0, 1, "FEMALE", true));
  }, [currentDepartment?.data?.id, dispatch]);

  return (
    <div className={"card"}>
      <Card style={{ width: 424, height: 224 }}>
        <h1>{props.title}</h1>
        <div className={"plus_min"}>
          <Button
            onClick={() => plusHandler()}
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
                fontSize: "16px",
              }}
            >
              {currentDepartment?.data?.count_female_o2_busy}
            </span>
          </div>
          <Button
            onClick={() =>
              dispatch(add(currentDepartment?.data?.id, 0, 1, "FEMALE", true))
            }
            size="large"
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
          />
        </div>
        <div className="progress_bar">
          <Progress percent={busyPercent || 0} />
        </div>
        <div>
          <label>
            Свободно{" "}
            <span style={{ color: " #1890FF" }}>{props.free || 0}</span>
          </label>
          <p>
            Всего <span style={{ color: " #1890FF" }}>{props.total || 0}</span>
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

  const dispatch = useDispatch();
  const handler = useCallback(() => {
    dispatch(getSingleDepartmentThunk(placesCount?.data?.id || 2));
  }, [dispatch, placesCount?.data?.id]);

  useEffect(() => {
    handler();
  }, [handler]);

  return (
    <div className={"card_container"}>
      <MaleCardWrapper title={"Мужские"} free={maleFree} total={maleTotal} />
      <FemaleCardWrapper
        title={"Женские"}
        free={femaleFree}
        total={femaleTotal}
      />
      <MaleO2CardWrapper
        title={"Мужские с кислородом"}
        free={maleO2Free}
        total={maleO2Total}
      />
      <FemaleO2CardWrapper
        title={"Женские с кислородом"}
        free={femaleO2Free}
        total={femaleO2Total}
      />
    </div>
  );
};
