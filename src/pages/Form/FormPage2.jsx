import React, {useState, useRef} from 'react';
import styles from "./FormBuku.module.css"

export default function FormPage(){
const dataKosong = {
    judul : '',
    pengarang : '',
    cetakan : '',
    tahunTerbit : 0,
    kotaTerbit : '',
    harga : 0,
}
const[data,setData] = useState(dataKosong)
const regex = /^[A-Za-z ]*$/;
const [errMsg, setErrMsg] = useState('')
const fotoSampul = useRef(null)

const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    if(name==='pengarang'){
        if(regex.test(value)) {
            setErrMsg('')
        } else {
            setErrMsg('Nama Pengarang Harus Berupa Huruf')
        }

    }

    setData ({
        ...data,
        [name] : value
    })

    console.log('data', data)
}

const handleSubmit =(event) => {
    if(errMsg !== ''){
        alert ('Terdapat data yang tidak sesuai')
    } else{
        alert('Data Buku ' + data.judul + ' berhasil diterima')
    }
    resetData()
    event.preventDefault()
}

const resetData = () => {
    setData(dataKosong);
    setErrMsg('')
}

    return(
        <>
        <h1>Formulir</h1> <br/>
        <form onSubmit = {handleSubmit}>
            <label>
                Judul :
               
                <input 
                size="45"
                type = 'text' 
                name = 'judul'
                onChange={handleInput}
                required
                value = {data.judul}
                className={styles.input}
            />
            </label>
           <br/>
           
            <label>
                Pengarang :
                <input 
                size="37"
                type = 'text' 
                name = 'pengarang'
                onChange={handleInput}
                required
                value = {data.pengarang}
                className={styles.input}
            />
            </label>
            <br/>
            <label>
                Cetakan :
                <input 
                size="41"
                type = 'text'
                name = 'cetakan' 
                onChange={handleInput}
                required
                value = {data.cetakan}
                className={styles.input}
            />
            </label>
            <br/>
            <label>
                Tahun Terbit :
                <input 
                size="37"
                type = 'number' 
                name = 'tahunTerbit'
                onChange={handleInput}
                required
                value = {data.tahunTerbit}
                className={styles.input}
            />
            </label>
            <br/>
            <label>
                Kota Terbit :
                <input 
                type = 'text' 
                size="36"
                name = 'kotaTerbit'
                onChange={handleInput}
                required
                value = {data.kotaTerbit}
                className={styles.input}
            />
            </label>
            <br/>
            <label>
                Harga :
                <input 
                type = 'number' 
                name = 'harga'
                onChange={handleInput}
                required
                value = {data.harga}
                className={styles.input}
            />
            </label>
            <br/>
            <label>
                Foto Sampul :
                <input 
                type = 'file'
                refs = {fotoSampul}
                className={styles.input}
            />
            </label>
            <br/>
            <span className={styles.errorMessage}>{errMsg}</span> <br/>
            <input type='submit' value='submit'/>
            <button onClick={resetData}>reset</button>
        </form>
        </>
    )}