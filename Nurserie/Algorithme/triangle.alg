<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="LIRE AC"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2etat="inactif" F2defaut="" F2lignes=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalAffichages="1000" nbDecimales="8" totalBoucles="5000000" arrondiAuto="vrai" epaisseurLigne="2" maxBoucle="500000" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#AB" algoitem="AB EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#BC" algoitem="BC EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#AC" algoitem="AC EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#AB#pasliste" algoitem="LIRE AB"/>
        <item code="2#BC#pasliste" algoitem="LIRE BC"/>
        <item code="2#AC#pasliste" algoitem="LIRE AC"/>
        <item code="6#AB=BC" algoitem="SI (AB=BC) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#iso B  #0" algoitem="AFFICHER &quot;iso B  &quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="6#AB=BC=AC" algoitem="SI (AB=BC=AC) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#equi#0" algoitem="AFFICHER &quot;equi&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="6#AB=AC" algoitem="SI (AB=AC) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#iso A#0" algoitem="AFFICHER &quot;iso A&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
        <item code="6#BC=AC" algoitem="SI (BC=AC) ALORS">
            <item code="7#debutsi" algoitem="DEBUT_SI"/>
            <item code="4#iso C#0" algoitem="AFFICHER &quot;iso C&quot;"/>
            <item code="8#finsi" algoitem="FIN_SI"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
