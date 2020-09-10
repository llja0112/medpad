import React from 'react';
import AceEditor from 'react-ace';

// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     flexWrap: 'wrap',
//     '& > *': {
//       margin: theme.spacing(1),
//       // width: theme.spacing(16),
//       maxWidth: 'sm',
//       height: theme.spacing(16),
//     },
//   },
// }));

// function onChange(newValue) {
//   console.log("change", newValue);
// }

export default function Textarea() {
  // const classes = useStyles();

  return (
    // <div className={classes.root}>
    //   <TextField
    //     id="standard-textarea"
    //     label="Clinical Note"
    //     placeholder="Placeholder"
    //     multiline
    //     rows={4}
    //   />
    // </div>
    <AceEditor
      maxLines={Infinity}
      width="100%"
      mode="text"
      theme="xcode"
      fontSize={20}
      // onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
  );
}
