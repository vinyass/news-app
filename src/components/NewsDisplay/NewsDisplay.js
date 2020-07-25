import React from "react";
import {
  Link,
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  newsContainer: {
    minHeight: "90%",
    minWidth: "70%",
    maxHeight: "90%",
    maxWidth: "70%",
    display: "flex",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  cover: {
    width: "100%",
    height: "100%",
  },
}));

const NewsDisplay = ({
  currentNews: { title, description, url, urlToImage },
}) => {
  const classes = useStyles();
  return (
    <div className={classes.newsContainer}>
      <Card className={classes.root}>
        <CardMedia className={classes.cover} image={urlToImage} title={title} />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {description}
            </Typography>
            <Link href="#" onClick={(e) => e.preventDefault} variant="body2">
              {url}
            </Link>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default NewsDisplay;
