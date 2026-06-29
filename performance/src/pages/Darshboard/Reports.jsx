import { memo } from "react";

const Reports = memo(() => {
    console.log('Reports Renderizado');

    // Simulando processo custoso
    const processData = () => {
        return Array.from({ length: 100000 }, (_, i) => ({
            id: i,
            value: Math.floor(Math.random() * 1000)
        }));
    }

    return (
        <div>

            <h2>Relatorio</h2>

            <p>{processData().map(p => `Id ${p.id} - Value: ${p.value}`)}</p>

        </div>
    )

})

export default Reports


