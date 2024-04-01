import React, { useState } from "react";

function Data() {

    const [form, setForm] = useState({ name: "", surname: "" });
    const onChangeInput = (event) => setForm({ ...form, [event.target.name]: event.target.value });

    return (
        <div>
            Name
             <br />
            <input name="name" value={form.name} onChange={onChangeInput}></input>
            <br /> <br />
            Surname
            <br/>
            <input surname="surname" value={form.surnamename} onChange={onChangeInput}></input>
            <br />
            {form.name} <br/>
            {form.surname}

        </div>
    );
}

export default Data;