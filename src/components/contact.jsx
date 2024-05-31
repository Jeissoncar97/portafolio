import { useState } from 'react';
import Swal from 'sweetalert2';

function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://formspree.io/f/xqkrvagb', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            Swal.fire({
                title: '¡Formulario enviado!',
                text: 'Su formulario ha sido enviado exitosamente.',
                timer: 1500,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
            setFormData({
                nombre: '',
                email: '',
                asunto: '',
                mensaje: ''
            });
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al enviar el formulario.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form__group">
                <input
                    className='input'
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder=' '
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="nombre">Nombre: </label>
            </div>

            <div className="form__group">
                <input
                    className='input'
                    type="text"
                    name="email"
                    id="email"
                    placeholder=' '
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email: </label>
            </div>

            <div className="form__group">
                <input
                    className='input'
                    type="text"
                    name="asunto"
                    id="asunto"
                    placeholder=' '
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="asunto">Asunto</label>
            </div>

            <div className="form__group">
                <textarea
                    className='input'
                    name="mensaje"
                    id="mensaje"
                    cols="30"
                    rows="10"
                    placeholder=' '
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                ></textarea>
                <label htmlFor="mensaje">Mensaje</label>
            </div>

            <div className="btn_form-container">
                <input type="submit" value="Enviar" className='btn_form' />
            </div>

            <input type="hidden" name="_next" value='https://jeissoncar97.github.io/portafolio5/' />
            <input type="hidden" name='_captcha' value="false" />
        </form>
    );
}

export default ContactForm;
