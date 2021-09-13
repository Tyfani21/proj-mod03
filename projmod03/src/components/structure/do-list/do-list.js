import React, {useEffect, useState} from "react";
import Card from "../card/card";

const DoList = () => {
    const[tarefa, setTarefa] = useState([]);

    useEffect (() => {
        getTarefa();
    },[])
}

const url = ''