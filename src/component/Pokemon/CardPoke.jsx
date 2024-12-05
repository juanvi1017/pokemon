import * as React from 'react';
import PropTypes from 'prop-types';
import ModalApp from '../Modal';
import DialogContent from "@mui/material/DialogContent";

import './cardPoke.css'

const CardPoke = ({ open, setOpen, size, value }) => {

  return (
    <ModalApp
      title=''
      title_accion="Cerrar"
      accion={() => setOpen(false)}
      open={open}
      setOpen={setOpen}
      size={size}
    >
      <DialogContent>
        <div className="card-poke">
          <img
            src={value.img}
            alt="card-poke Display"
            className="card-poke-image"
          />
          <div className="card-poke-content">
            <h2 className="card-poke-title">{value.name.toUpperCase()}</h2>
            <p className="card-poke-description">
              Experiencia: {value.experience}
            </p>
            <p className="card-poke-description">
              Habilidades:
              {value.abilities.map((value, index) => (
                <li key={index}>{value.ability.name}</li>
              ))}
            </p>
            <p className="card-poke-description">
              Tipo:
              {value.types.map((value, index) => (
                <li key={index}>{value.type.name}</li>
              ))}
            </p>
          </div>
        </div>
      </DialogContent>
    </ModalApp>
  );
}
export default CardPoke

CardPoke.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  size: PropTypes.string,
  value: PropTypes.object,
  view: PropTypes.func,
};
