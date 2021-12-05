import React, {useState, useEffect, useRef} from 'react';
import {DropDownView} from './styles';
import {useField} from '@unform/core';
import {default as DropDown} from 'react-native-paper-dropdown';
import {Colors} from '../../common/colors/Colors';

const Select = props => {
  const {name} = props;
  const selectRef = useRef(null);
  const {error, fieldName, registerField, defaultValue = ''} = useField(name);

  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const _handleChangeValue = React.useCallback(
    val => {
      setSelectedValue(val);
      props.onSelectionChange(val);
    },
    [props],
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: () => {
        return selectedValue || '';
      },
      setValue: (ref, value) => {
        _handleChangeValue(value);
      },
      clearValue: () => {
        _handleChangeValue('');
      },
    });
  }, [fieldName, registerField, selectedValue, _handleChangeValue]);

  return (
    <DropDownView>
      <DropDown
        label={props.label}
        mode={props.mode}
        visible={showDropDown}
        showDropDown={() =>
          props.disabled ? setShowDropDown(false) : setShowDropDown(true)
        }
        onDismiss={() => setShowDropDown(false)}
        value={selectedValue}
        setValue={val => {
          _handleChangeValue(val);
        }}
        list={props.options}
        inputProps={{
          disabled: props.disabled,
          error: Boolean(error),
          style: {
            backgroundColor: Colors.WHITE,
          },
          mode: 'flat',
        }}
      />
    </DropDownView>
  );
};

export default Select;
