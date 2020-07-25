import React, { useState, useEffect } from "react";
import { TextField, MenuItem, makeStyles } from "@material-ui/core";
import {
  AllOutOutlined,
  BusinessCenterOutlined,
  LocalActivityOutlined,
  GavelOutlined,
  SportsBasketballOutlined,
  DevicesOutlined,
  InsertChartOutlinedOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      [theme.breakpoints.down("sm")]: {
        width: "10ch",
      },
    },
  },
}));

const countries = [
  {
    id: "in",
    name: "India",
  },
  {
    id: "us",
    name: "US",
  },
  {
    id: "au",
    name: "Australia",
  },
  {
    id: "de",
    name: "Germany",
  },
  {
    id: "ru",
    name: "Russia",
  },
  {
    id: "cn",
    name: "China",
  },
  {
    id: "jp",
    name: "Japan",
  },
  {
    id: "fr",
    name: "France",
  },
];

const categories = [
  {
    id: "",
    name: "General",
    icon: AllOutOutlined,
  },
  {
    id: "business",
    name: "Business",
    icon: BusinessCenterOutlined,
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: LocalActivityOutlined,
  },
  {
    id: "politics",
    name: "Politics",
    icon: GavelOutlined,
  },
  {
    id: "sports",
    name: "Sports",
    icon: SportsBasketballOutlined,
  },
  {
    id: "technology",
    name: "Technology",
    icon: DevicesOutlined,
  },
  {
    id: "science",
    name: "Science",
    icon: InsertChartOutlinedOutlined,
  },
];

const NewsFilter = (props) => {
  const classes = useStyles();
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const filter = {
      country: country,
      category: category,
      searchText: searchText,
    };
    props.updateData(filter);
  }, [country, category]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          label="Country"
          select
          id="country-select"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {countries.map((country, i) => (
            <MenuItem key={i} value={country.id}>
              {country.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Category"
          id="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((category, i) => {
            const CategoryIcon = category.icon;
            return (
              <MenuItem key={i} value={category.id}>
                <CategoryIcon fontSize="small" /> <span>{category.name}</span>
              </MenuItem>
            );
          })}
        </TextField>
        <TextField
          label="Search"
          id="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onBlur={(e) => {
            const filter = {
              country: country,
              category: category,
              searchText: searchText,
            };
            props.updateData(filter);
          }}
          onKeyDown={(e) => {
            const code = e.keyCode ? e.keyCode : e.which;
            if (code == 13) {
              const filter = {
                country: country,
                category: category,
                searchText: searchText,
              };
              props.updateData(filter);
            }
          }}
        />
      </div>
    </form>
  );
};

export default NewsFilter;
