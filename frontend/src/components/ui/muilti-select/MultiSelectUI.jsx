import {
  CheckIcon,
  Combobox,
  Group,
  Input,
  Pill,
  PillsInput,
  ScrollArea,
  useCombobox,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

import styles from "./MultiSelectUI.module.css";

const MAX_DISPLAYED_VALUES = 2;

const MultiSelectUI = ({ data, value, setValue, setDisabled }) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
  });

  const handleValueSelect = (val) => {
    setValue((current) =>
      current.includes(val)
        ? current.filter((v) => v !== val)
        : [...current, val]
    );

    setDisabled(false);
  };

  const handleValueRemove = (val) => {
    setValue((current) => current.filter((v) => v !== val));
  };

  const values = value
    .slice(
      0,
      MAX_DISPLAYED_VALUES === value.length
        ? MAX_DISPLAYED_VALUES
        : MAX_DISPLAYED_VALUES - 1
    )
    .map((item) => <p key={item}>{item}</p>);

  const options = data.map((item, index) => (
    <Combobox.Option
      className={styles.option}
      value={item.name}
      key={item.id}
      active={value.includes(item.name)}
    >
      <Group gap="sm">
        {value.includes(item.name) ? (
          <CheckIcon size={12} stroke={1.5} color="#ACADB9" />
        ) : null}
        <Group gap="sm">
          <span>{item.name}</span>
        </Group>
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox
      className={styles.combobox}
      label="Genres"
      store={combobox}
      onOptionSubmit={handleValueSelect}
      withinPortal={false}
    >
      <Combobox.DropdownTarget>
        <PillsInput
          classNames={{ input: styles.input, label: styles.label }}
          pointer
          rightSection={<IconChevronDown stroke={1.5} />}
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents="none"
        >
          <Pill.Group>
            {value.length > 0 ? (
              <>
                {values}
                {value.length > MAX_DISPLAYED_VALUES && (
                  <Pill>+{value.length - (MAX_DISPLAYED_VALUES - 1)} more</Pill>
                )}
              </>
            ) : (
              <Input.Placeholder>Select genre</Input.Placeholder>
            )}

            <Combobox.EventsTarget>
              <PillsInput.Field
                type="hidden"
                onBlur={() => combobox.closeDropdown()}
                onKeyDown={(event) => {
                  if (event.key === "Backspace") {
                    event.preventDefault();
                    handleValueRemove(value[value.length - 1]);
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea h={224} scrollbarSize={5} type="scroll">
            {options}
          </ScrollArea>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default MultiSelectUI;
