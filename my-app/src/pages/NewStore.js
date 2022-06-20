// node libraies
import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useEffect, useState } from "react";
// import { yupResolver } from "@hookform/resolvers/yup";
import { allCites } from "utils/allCitis";
// styles
import styles from "./createStore.module.scss";

function NewStore() {
  const [selectBigCities, setSelectBigCities] = useState([]);
  const [selectCities, setSelectCities] = useState([]);
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      State: {},
      BigCities: {},
      Cities: {},
    },
    // resolver: yupResolver(), //for validation
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  const State = watch("State");
  const BigCities = watch("BigCities");

  useEffect(() => {
    const subscription = watch((data) => {
      allCites?.map((item) => {
        if (data.State === item.label) {
          return setSelectBigCities(item);
        }
      });
      selectBigCities?.children?.map((item) => {
        if (data.BigCities === item.label) {
          setSelectCities(item);
        }
      });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [State, BigCities]);

  return (
    <div>
      <title>ثبت حجره</title>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form_right}>
          {/* state */}
          <label className={styles.form_label}>استان</label>
          <select
            className={styles.form_select}
            {...register("State", { required: true })}
          >
            <option></option>
            {allCites?.map((value, index) => {
              return (
                <option key={index} value={value.id}>
                  {value.label}
                </option>
              );
            })}
          </select>

          {/* big city */}
          <label className={styles.form_label}>شهرستان</label>
          <select
            className={styles.form_select}
            {...register("BigCities", { required: true })}
          >
            <option></option>
            {selectBigCities?.children?.map((value, index) => {
              return (
                <option key={index} value={value.id}>
                  {value.label}
                </option>
              );
            })}
          </select>

          {/* city */}
          <label className={styles.form_label}>شهر</label>
          <select
            className={styles.form_select}
            {...register("Cities", { required: true })}
          >
            <option></option>
            {selectCities?.children?.map((value, index) => {
              return (
                <option key={index} value={value.id}>
                  {value.label}
                </option>
              );
            })}
          </select>

          {/* button submit */}
          <div>
            <button
              title="ثبت حجره"
              submit
              style={{
                width: "100%",
                marginTop: "20px",
                height: "100%",
                backgroundColor: "#42b3f5",
              }}
            >
              ثبت
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewStore;
