import React from 'react';
import {
  Grid,
  withStyles,
  Select,
  MenuItem,
  FormControl,
  Button,
  InputLabel
} from '@material-ui/core';
import styles from './styles/feedStyles';
import { Send, Clear } from '@material-ui/icons';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class CaixaEdicaoPage extends React.Component {
  state = {
    tipoPublicacao: 10
  };

  uploadImage = () => {
    //imagemArquivo.uploadImageCallBack();
  };

  handleChange = event => {
    this.setState({ tipoPublicacao: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { tipoPublicacao } = this.state;
    return (
      <>
        <Grid container className={classes.componenteEdicao}>
          <Grid item>
            <Grid container className={classes.editorTexto}>
              <Grid item>
                <Editor
                  toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    image: {
                      alt: { present: true, mandatory: true }
                    }
                  }}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={8} xs={8} className={classes.botao}>
                <Grid container>
                  <FormControl variant='outlined' className={classes.formControl}>
                    <Select
                      value={tipoPublicacao}
                      styles={classes.selectStyles}
                      onChange={this.handleChange}
                    >
                      <MenuItem value={10}>Amigos</MenuItem>
                      <MenuItem value={20}>Público</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item md={4} xs={4}>
                <Grid container>
                  <Grid item md={6} xs={6} className={classes.botao}>
                    <Button variant='contained'>
                      <Clear></Clear>
                      Limpar
                    </Button>
                  </Grid>
                  <Grid item md={6} xs={6} className={classes.botao}>
                    <Button variant='contained' color='primary'>
                      <Send></Send>
                      Publicar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(CaixaEdicaoPage);
