import React from "react";
import * as styles from "./timetable.module.scss";

const Timetable = ({ timetable }) => {
  console.log(timetable.forEach(item => console.log(item)));
  const renderDays = () => {
    return timetable.map((item, index) => {
      const renderHeader = () => {
        return <thead key={ `class_${index}`}>
          <tr>
            <th className={ styles.headcell }>
              { item.day }
            </th>
            <th className={ styles.emptycell }></th>
          </tr>
        </thead>
      };

      const renderBody = item.classitem.map((item, index) => {
        return <tr key={ `class_${index}` }>
          <td className={ styles.timecell }>{ item.hour }</td>
          <td className={ styles.titlecell }>
            { item.title }
          </td>
        </tr>
      });

      return <>
        { renderHeader() }
        <tbody className={ styles.body }>
         { renderBody }
        </tbody>
      </>
    });
  };

  return (
    <div>
    <table className={ styles.container }>
        { renderDays() }
    </table>
    </div>
  );
};

export default Timetable;