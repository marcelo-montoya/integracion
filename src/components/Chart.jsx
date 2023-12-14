import { VictoryPie, VictoryLabel } from "victory";
import { useCalculate } from "../hooks/useCalculate";

export const Chart = () => {

    const { ingreso, gasto } = useCalculate();

    return (
        <div className="chart">
            {ingreso !== 0 || gasto !== 0 ? (
                <VictoryPie
                    colorScale={["navy", "tomato"]}
                    data={[
                        ...(ingreso !== 0 ? [{ x: "Ingreso", y: ingreso }] : []),
                        ...(gasto !== 0 ? [{ x: "Gastos", y: gasto }] : [])
                    ]}
                    animate={{
                        duration: 2000,
                    }}
                    labelComponent={
                        <VictoryLabel
                            angle={45}
                            style={{
                                fill: "black",
                                fontSize: 15
                            }}
                        />
                    }
                    height={250}
                />
            ) : (
                <div className="blackchart">
                    <VictoryPie
                        colorScale={["black", "gray"]}
                        data={[
                            { x: "Gastos", y: 1 },
                            { x: "Ingresos", y: 1 }
                        ]}
                        labelComponent={
                            <VictoryLabel
                                angle={45}
                                style={{
                                    fill: "black",
                                    fontSize: 15
                                }}
                            />
                        }
                        height={250}
                    />
                    <p>No hay datos</p>
                </div>

            )}
        </div>
    );
};
