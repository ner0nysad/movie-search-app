import { Select } from "@mantine/core";
import { useEffect, useState } from "react";

import MultiSelectUI from "../../ui/muilti-select/MultiSelectUI";
import NumberInputUI from "../../ui/number-input/NumberInputUI";

import { IconChevronDown } from "@tabler/icons-react";
import ButtonText from "../../ui/button-text/ButtonText";

import styles from "./Filters.module.css";

const Filters = ({ setParams, genres, params }) => {
  const [valueGenre, setValueGenre] = useState([]);
  const [valueYear, setValueYear] = useState("");
  const [valueRatingFrom, setValueRatingFrom] = useState("");
  const [valueRatingTo, setValueRatingTo] = useState("");
  const [valueSort, setValueSort] = useState("popularity.desc");

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (valueGenre.length === 0) {
      if (params.genre.length !== 0) {
        setParams((prev) => ({ ...prev, genre: [] }));
      }
    } else {
      setParams((prev) => ({
        ...prev,
        genre: valueGenre.map((val) => genres.find((el) => el.name === val).id),
      }));
    }
  }, [valueGenre, genres]);

  const handlerChangeValue = (value, setValue, key) => {
    setValue(value);
    setDisabled(false);
    setParams((prev) => ({ ...prev, [key]: value }));
  };

  const handlerResetFilters = () => {
    setValueGenre([]);
    setValueYear(null);
    setValueRatingFrom("");
    setValueRatingTo("");

    setDisabled(true);
    setParams({ sort: `${valueSort}`, genre: [], year: "", from: "", to: "" });
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filters__info}>
        <MultiSelectUI
          setParams={setParams}
          value={valueGenre}
          setValue={setValueGenre}
          setDisabled={setDisabled}
          data={genres}
        />
        <Select
          classNames={{
            root: styles.filters__select_year,
            input: styles.input,
            label: styles.label,
            option: styles.option,
          }}
          type="number"
          label="Release year"
          placeholder="Select release year"
          data={[
            "2024",
            "2023",
            "2022",
            "2021",
            "2020",
            "2019",
            "2018",
            "2017",
            "2016",
            "2015",
            "2014",
            "2013",
            "2012",
            "2011",
            "2010",
            "2009",
            "2008",
            "2007",
            "2006",
            "2005",
            "2004",
            "2003",
            "2002",
            "2001",
            "2000",
            "1999",
            "1998",
            "1997",
            "1996",
            "1995",
            "1994",
            "1993",
            "1992",
            "1991",
            "1990",
            "1989",
            "1988",
            "1987",
            "1986",
            "1985",
            "1984",
            "1983",
            "1982",
            "1981",
            "1980",
          ]}
          value={valueYear}
          onChange={(value) => handlerChangeValue(value, setValueYear, "year")}
          rightSection={<IconChevronDown stroke={1.5} />}
          allowDeselect={true}
        />
        <div className={styles.filters__ratings}>
          <NumberInputUI
            label="Ratings"
            placeholder="From"
            onChange={(value) =>
              handlerChangeValue(value, setValueRatingFrom, "from")
            }
            value={valueRatingFrom}
          />
          <NumberInputUI
            placeholder="To"
            onChange={(value) =>
              handlerChangeValue(value, setValueRatingTo, "to")
            }
            value={valueRatingTo}
          />
        </div>
        <ButtonText
          style={{ minWidth: "5.25rem" }}
          onClick={handlerResetFilters}
          disabled={disabled}
        >
          Reset filters
        </ButtonText>
      </div>
      <div className={styles.filters__sort}>
        <Select
          classNames={{
            root: styles.filters__select__sort,
            input: styles.input,
            label: styles.label,
            option: styles.option,
          }}
          label="Sort by"
          data={[
            { value: "popularity.desc", label: "Most popular" },
            { value: "popularity.asc", label: "Least Popular" },
            { value: "vote_average.desc", label: "Most Rated" },
            { value: "vote_average.asc", label: "Least Rated" },
            { value: "vote_count.desc", label: "Most Voted" },
            { value: "vote_count.asc", label: "Least Voted" },
          ]}
          value={valueSort}
          onChange={(value) => handlerChangeValue(value, setValueSort, "sort")}
          rightSection={<IconChevronDown stroke={1.5} />}
          allowDeselect={false}
        />
      </div>
    </div>
  );
};

export default Filters;
