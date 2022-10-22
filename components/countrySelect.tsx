import React, {createRef} from 'react'
import { useRouter } from 'next/router'

export default function CountrySelect(props: any) {
    const router = useRouter()
    function handleChange(e: any) {
        const countryValue = "/?locale=" + e.target.value; 
        router.push(countryValue);
    }
    return (
        <label>
            Country
            <select id="storefronts" onChange={handleChange} value={props.country.countryCode}>
                <option value="dz">Algeria</option>
                <option value="ao">Angola</option>
                <option value="ai">Anguilla</option>
                <option value="ag">Antigua and Barbuda</option>
                <option value="ar">Argentina</option>
                <option value="am">Armenia</option>
                <option value="au">Australia</option>
                <option value="at">Austria</option>
                <option value="az">Azerbaijan</option>
                <option value="bs">Bahamas</option>
                <option value="bh">Bahrain</option>
                <option value="bb">Barbados</option>
                <option value="by">Belarus</option>
                <option value="be">Belgium</option>
                <option value="bz">Belize</option>
                <option value="bj">Benin</option>
                <option value="bm">Bermuda</option>
                <option value="bt">Bhutan</option>
                <option value="bo">Bolivia</option>
                <option value="ba">Bosnia and Herzegovina</option>
                <option value="bw">Botswana</option>
                <option value="br">Brazil</option>
                <option value="vg">British Virgin Islands</option>
                <option value="bg">Bulgaria</option>
                <option value="kh">Cambodia</option>
                <option value="cm">Cameroon</option>
                <option value="ca">Canada</option>
                <option value="cv">Cape Verde</option>
                <option value="ky">Cayman Islands</option>
                <option value="td">Chad</option>
                <option value="cl">Chile</option>
                <option value="cn">China mainland</option>
                <option value="co">Colombia</option>
                <option value="cr">Costa Rica</option>
                <option value="hr">Croatia</option>
                <option value="cy">Cyprus</option>
                <option value="cz">Czech Republic</option>
                <option value="ci">Côte d&apos;Ivoire</option>
                <option value="cd">Democratic Republic of the&nbsp;Congo</option>
                <option value="dk">Denmark</option>
                <option value="dm">Dominica</option>
                <option value="do">Dominican Republic</option>
                <option value="ec">Ecuador</option>
                <option value="eg">Egypt</option>
                <option value="sv">El Salvador</option>
                <option value="ee">Estonia</option>
                <option value="sz">Eswatini</option>
                <option value="fj">Fiji</option>
                <option value="fi">Finland</option>
                <option value="fr">France</option>
                <option value="ga">Gabon</option>
                <option value="gm">Gambia</option>
                <option value="ge">Georgia</option>
                <option value="de">Germany</option>
                <option value="gh">Ghana</option>
                <option value="gr">Greece</option>
                <option value="gd">Grenada</option>
                <option value="gt">Guatemala</option>
                <option value="gw">Guinea-Bissau</option>
                <option value="gy">Guyana</option>
                <option value="hn">Honduras</option>
                <option value="hk">Hong Kong</option>
                <option value="hu">Hungary</option>
                <option value="is">Iceland</option>
                <option value="in">India</option>
                <option value="id">Indonesia</option>
                <option value="iq">Iraq</option>
                <option value="ie">Ireland</option>
                <option value="il">Israel</option>
                <option value="it">Italy</option>
                <option value="jm">Jamaica</option>
                <option value="jp">Japan</option>
                <option value="jo">Jordan</option>
                <option value="kz">Kazakhstan</option>
                <option value="ke">Kenya</option>
                <option value="kr">Korea, Republic of</option>
                <option value="xk">Kosovo</option>
                <option value="kw">Kuwait</option>
                <option value="kg">Kyrgyzstan</option>
                <option value="la">Lao People&apos;s Democratic Republic</option>
                <option value="lv">Latvia</option>
                <option value="lb">Lebanon</option>
                <option value="lr">Liberia</option>
                <option value="ly">Libya</option>
                <option value="lt">Lithuania</option>
                <option value="lu">Luxembourg</option>
                <option value="mo">Macao</option>
                <option value="mg">Madagascar</option>
                <option value="mw">Malawi</option>
                <option value="my">Malaysia</option>
                <option value="mv">Maldives</option>
                <option value="ml">Mali</option>
                <option value="mt">Malta</option>
                <option value="mr">Mauritania</option>
                <option value="mu">Mauritius</option>
                <option value="mx">Mexico</option>
                <option value="fm">Micronesia, Federated States of</option>
                <option value="md">Moldova</option>
                <option value="mn">Mongolia</option>
                <option value="me">Montenegro</option>
                <option value="ms">Montserrat</option>
                <option value="ma">Morocco</option>
                <option value="mz">Mozambique</option>
                <option value="mm">Myanmar</option>
                <option value="na">Namibia</option>
                <option value="np">Nepal</option>
                <option value="nl">Netherlands</option>
                <option value="nz">New Zealand</option>
                <option value="ni">Nicaragua</option>
                <option value="ne">Niger</option>
                <option value="ng">Nigeria</option>
                <option value="mk">North&nbsp;Macedonia</option>
                <option value="no">Norway</option>
                <option value="om">Oman</option>
                <option value="pa">Panama</option>
                <option value="pg">Papua New Guinea</option>
                <option value="py">Paraguay</option>
                <option value="pe">Peru</option>
                <option value="ph">Philippines</option>
                <option value="pl">Poland</option>
                <option value="pt">Portugal</option>
                <option value="qa">Qatar</option>
                <option value="cg">Republic of the&nbsp;Congo</option>
                <option value="ro">Romania</option>
                <option value="ru">Russia</option>
                <option value="rw">Rwanda</option>
                <option value="sa">Saudi Arabia</option>
                <option value="sn">Senegal</option>
                <option value="rs">Serbia</option>
                <option value="sc">Seychelles</option>
                <option value="sl">Sierra Leone</option>
                <option value="sg">Singapore</option>
                <option value="sk">Slovakia</option>
                <option value="si">Slovenia</option>
                <option value="sb">Solomon Islands</option>
                <option value="za">South Africa</option>
                <option value="es">Spain</option>
                <option value="lk">Sri Lanka</option>
                <option value="kn">St. Kitts and Nevis</option>
                <option value="lc">St. Lucia</option>
                <option value="vc">St. Vincent and The Grenadines</option>
                <option value="sr">Suriname</option>
                <option value="se">Sweden</option>
                <option value="ch">Switzerland</option>
                <option value="tw">Taiwan</option>
                <option value="tj">Tajikistan</option>
                <option value="tz">Tanzania</option>
                <option value="th">Thailand</option>
                <option value="to">Tonga</option>
                <option value="tt">Trinidad and Tobago</option>
                <option value="tn">Tunisia</option>
                <option value="tr">Turkey</option>
                <option value="tm">Turkmenistan</option>
                <option value="tc">Turks and Caicos</option>
                <option value="ae">UAE</option>
                <option value="ug">Uganda</option>
                <option value="ua">Ukraine</option>
                <option value="gb">United Kingdom</option>
                <option value="us">United States</option>
                <option value="uy">Uruguay</option>
                <option value="uz">Uzbekistan</option>
                <option value="vu">Vanuatu</option>
                <option value="ve">Venezuela</option>
                <option value="vn">Vietnam</option>
                <option value="ye">Yemen</option>
                <option value="zm">Zambia</option>
                <option value="zw">Zimbabwe</option></select>
        </label>
    );
}