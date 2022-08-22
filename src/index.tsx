// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import Loader from "./components/Loader/Loader";
import {WithLoader} from "./components/WithLoader/WithLoader";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import {CARD_SUBTITLE, CARD_TITLE} from "./__test__/constants";
import Input from "./components/Input/Input";
import CheckBox from "./components/CheckBox/CheckBox";
import MultiDropdown, {Option} from "./components/MultiDropdown/MultiDropdown";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const options: Option[] = [
    { key: 'msk', value: 'Москва' },
    { key: 'spb', value: 'Санкт-Петербург' },
    { key: 'ekb', value: 'Екатеринбург' },
];

let value = [{ key: 'msk', value: 'Москва' }];

function allChosen(selected) {
    console.log('Выбрано: ', JSON.stringify(selected))
}
const count_choosen = (values) => {
    return `Выбрано: ${values.length}`
}

root.render(
  <React.StrictMode>
      <MultiDropdown options={options} onChange = {allChosen} value={options} pluralizeOptions={count_choosen} disabled={false}/>
  </React.StrictMode>
);

