export const filterEtablissementBySecteur = (secteur,etablissements=[])=>{
return !secteur ? etablissements :  etablissements.filter(e=>e.secteur ===secteur) 
} 