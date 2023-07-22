import React from "react";
import "../../styles/molecules/Monitor.scss";

type MonitorProps = {
    value: string;
};
export default function Monitor({value}: MonitorProps) {
    return (
        <div className="monitor">
            <h1>{value}</h1>
        </div>
    )
}
