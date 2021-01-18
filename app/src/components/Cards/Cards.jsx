import React, {useContext} from "react";
import "./cards.scss";
import {ConfigContext} from "../App/App";

const Cards = props => {
    const { id, name, image, shortDescription } = props;

    const context = useContext(ConfigContext);

    return (
        <>
            <section className={"CardBox"}>
                <div className={"imageContainer"}>
                    <img src={context.urlBE + image} alt={'Prod'}/>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{'Product: ' + name}</h3>
                    </div>
                    <div className="panel-body">
                        <h5>{shortDescription}</h5>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cards;
