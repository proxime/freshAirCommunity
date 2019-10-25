import React from 'react';

const DashboardHowTo = () => {
    return (
        <div className="dashboard-section blue-gradient">
            <h1>
                <div className="section-before gray-gradnient"></div>
                <div>
                    <span className="bold">Jak zbadać</span> zanieczyszczenie powietrza?
            </div>
            </h1>
            <p>Istnieją różne metody wykorzystywane w ocenie sytuacji. Są to wysokiej jakości pomiary automatyczne ciągłe, pomiary manualne ciągłe, pomiary manualne cyklicznie, pomiary wskaźnikowe pasywne, a także modelowanie matematyczne i obiektywne metody szacowania. W ten sposób można badać zawartość na przykład pyłów PM10 I PM2.5, których normy w Polsce są przekraczane zwłaszcza w okresie grzewczym w dniach bezwietrznych. W przypadku metody automatycznej stosuje się mierniku, które na bieżąco mierzą stężenie zanieczyszczeń, co umożliwia przekazywanie pomiarów w trybie online i informowanie o aktualnym stanie na portalach inspekcji ochrony środowiska – dane aktualizowane są co godzinę.</p>
        </div>
    );
}

export default DashboardHowTo;