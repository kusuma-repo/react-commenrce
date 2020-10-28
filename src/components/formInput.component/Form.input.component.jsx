import './Form.input.component.styles.scss';

const FormInput = ({ handleChange, label, ...propsForm }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...propsForm} />
    {label ? (
      <label
        className={`${propsForm.value.length ? 'shrink' : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
