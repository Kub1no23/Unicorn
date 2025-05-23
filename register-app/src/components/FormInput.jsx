import './formInput.css'

function FormInput(props) {
    const { label, onChange, ...inputProps } = props;
    return (<div>
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} />
    </div>)
}

export default FormInput