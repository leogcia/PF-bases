import React, { useState } from "react";
import { editUser } from "../../redux/actions/index"
import './EditUserForm.css'
import { useDispatch } from 'react-redux';
import { toggleUpdate } from "../../redux/actions";


// email: 
// username: 
// password: 
// firstName:
// lastName: 
// gender: 
// nationality:
// birthDate: 
// isActive:


function EditUserForm({ _id, handleClosePopUp }) {

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [nationality, setNationality] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [address, setAddress] = useState("");

    const dispatch = useDispatch()




    function handleSubmit(e, firstName, lastName, gender, nationality, birthDate, address) {
        e.preventDefault()
        let data = {
            firstName,
            lastName,
            gender,
            nationality,
            birthDate: birthDate.toString(),
            address: address.toString(),
            _id
        }
        // console.log(data, 'data in editUserForm')
        dispatch(editUser(data)).then(handleClosePopUp())
    }

    return (
        <div className='CreateFormContainer'>
            < div className='CreateForm'>
                <form onSubmit={(e) => handleSubmit(e, firstname, lastname, gender, nationality, birthDate, address)} className="form">
                    <div className="Title">Edit your personal information</div>
                    <div className="inputContainter">
                        {/* <label className='containers'>Firstname</label> */}
                        <input type="text" placeholder="Firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)} className="styleForm" required />
                    </div>
                    <div className="inputContainter">
                        {/* <label className='containers'>Lastname</label> */}
                        <input type="text" placeholder="Lastname" value={lastname} onChange={(e) => setLastName(e.target.value)} className="styleForm" required />
                    </div>

                    <div className="inputContainter">
                        <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="select" required >
                            <option value="">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="inputContainter">
                        {/* <label className='containers'>nationality</label> */}
                        <select name="pais" onChange={(e) => setNationality(e.target.value)} className="select" >
                            <option value={nationality}>Select your country</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Afganist??n">Afganist??n</option>
                            <option value="Albania">Albania</option>
                            <option value="Alemania">Alemania</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antillas Holandesas">Antillas Holandesas</option>
                            <option value="Arabia Saudita">Arabia Saudita</option>
                            <option value="Argelia">Argelia</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaij??n">Azerbaij??n</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="B??lgica">B??lgica</option>
                            <option value="Belice">Belice</option>
                            <option value="Benin">Benin</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bielorusia">Bielorusia</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia Herzegovina">Bosnia Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Brasil">Brasil</option>
                            <option value="Brunei">Brunei</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cabo Verde">Cabo Verde</option>
                            <option value="Camboya">Camboya</option>
                            <option value="Camer??n">Camer??n</option>
                            <option value="Canad??">Canad??</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Chipre">Chipre</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Corea del Norte">Corea del Norte</option>
                            <option value="Corea del Sur">Corea del Sur</option>
                            <option value="Costa de Marfil">Costa de Marfil</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Croacia">Croacia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Darussalam">Darussalam</option>
                            <option value="Dinamarca">Dinamarca</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egipto">Egipto</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Em. Arabes Un.">Em. Arabes Un.</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Eslovaquia">Eslovaquia</option>
                            <option value="Eslovenia">Eslovenia</option>
                            <option value="Espa??a">Espa??a</option>
                            <option value="Estados Unidos">Estados Unidos</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Etiop??a">Etiop??a</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Filipinas">Filipinas</option>
                            <option value="Finlandia">Finlandia</option>
                            <option value="Francia">Francia</option>
                            <option value="Gab??n">Gab??n</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Grecia">Grecia</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Groenlandia">Groenlandia</option>
                            <option value="Guadalupe">Guadalupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guayana Francesa">Guayana Francesa</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea Ecuatorial">Guinea Ecuatorial</option>
                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Hait??">Hait??</option>
                            <option value="Holanda">Holanda</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungr??a">Hungr??a</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Irak">Irak</option>
                            <option value="Ir??n">Ir??n</option>
                            <option value="Irlanda">Irlanda</option>
                            <option value="Islandia">Islandia</option>
                            <option value="Islas Cayman">Islas Cayman</option>
                            <option value="Islas Cook">Islas Cook</option>
                            <option value="Islas Faroe">Islas Faroe</option>
                            <option value="Islas Marianas del Norte">Islas Marianas del Norte</option>
                            <option value="Aguante Gonza">Aguante Gonza</option>
                            <option value="Islas Solomon">Islas Solomon</option>
                            <option value="Islas Turcas y Caicos">Islas Turcas y Caicos</option>
                            <option value="Islas V??rgenes">Islas V??rgenes</option>
                            <option value="Islas Wallis y Futuna">Islas Wallis y Futuna</option>
                            <option value="Israel">Israel</option>
                            <option value="Italia">Italia</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Jap??n">Jap??n</option>
                            <option value="Jordania">Jordania</option>
                            <option value="Kazajst??n">Kazajst??n</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kirguist??n">Kirguist??n</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Laos">Laos</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Letonia">Letonia</option>
                            <option value="L??bano">L??bano</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libia">Libia</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lituania">Lituania</option>
                            <option value="Luxemburgo">Luxemburgo</option>
                            <option value="Macao">Macao</option>
                            <option value="Macedonia">Macedonia</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malasia">Malasia</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marruecos">Marruecos</option>
                            <option value="Martinica">Martinica</option>
                            <option value="Mauricio">Mauricio</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="M??xico">M??xico</option>
                            <option value="Micronesia">Micronesia</option>
                            <option value="Moldova">Moldova</option>
                            <option value="M??naco">M??naco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="N??ger">N??ger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Noruega">Noruega</option>
                            <option value="Nueva Caledonia">Nueva Caledonia</option>
                            <option value="Nueva Zelandia">Nueva Zelandia</option>
                            <option value="Om??n">Om??n</option>
                            <option value="Pakist??n">Pakist??n</option>
                            <option value="Panam??">Panam??</option>
                            <option value="Papua Nueva Guinea">Papua Nueva Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Per??">Per??</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Polinesia Francesa">Polinesia Francesa</option>
                            <option value="Polonia">Polonia</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="RD Congo">RD Congo</option>
                            <option value="Reino Unido">Reino Unido</option>
                            <option value="Rep??blica Centroafricana">Rep??blica Centroafricana</option>
                            <option value="Rep??blica Checa">Rep??blica Checa</option>
                            <option value="Rep??blica Dominicana">Rep??blica Dominicana</option>
                            <option value="Reuni??n">Reuni??n</option>
                            <option value="Rumania">Rumania</option>
                            <option value="Rusia">Rusia</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Sahara Occidental">Sahara Occidental</option>
                            <option value="Saint Pierre y Miquelon">Saint Pierre y Miquelon</option>
                            <option value="Samoa">Samoa</option>
                            <option value="Samoa Americana">Samoa Americana</option>
                            <option value="San Crist??bal y Nevis">San Crist??bal y Nevis</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Santa Elena">Santa Elena</option>
                            <option value="Santa Luc??a">Santa Luc??a</option>
                            <option value="Sao Tom?? y Pr??ncipe">Sao Tom?? y Pr??ncipe</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia y Montenegro">Serbia y Montenegro</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leona">Sierra Leona</option>
                            <option value="Singapur">Singapur</option>
                            <option value="Siria">Siria</option>
                            <option value="Somalia">Somalia</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sud??frica">Sud??frica</option>
                            <option value="Sud??n">Sud??n</option>
                            <option value="Suecia">Suecia</option>
                            <option value="Suiza">Suiza</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Swazilandia">Swazilandia</option>
                            <option value="Taiw??n">Taiw??n</option>
                            <option value="Uruguay">Uruguay</option>
                        </select>
                    </div>
                    <div className="inputContainter">
                        {/* <label className='containers'>Birdthdate</label> */}
                        birthdate
                        <input type="date" placeholder="BirthDate" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="styleForm" required />
                    </div>
                    <div className="inputContainter">
                        {/* <label className='containers'>Birdthdate</label> */}
                        <input type="text" placeholder="Shipping Address" value={address} onChange={(e) => setAddress(e.target.value)} className="styleForm" required />
                    </div>

                    <div className="butt-edituser-container">
                        <button className="butt" onClick={handleClosePopUp}>Back</button>                        
                        <button type="submit" className="butt">Confirm</button>                       
                    </div>
                </form>
            </div>
        </div>
    )

}

export default EditUserForm;


