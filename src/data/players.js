// Dados dos membros. Quem edita este arquivo é a diretoria de gestão.
//
//  heart          -> vidas restantes (0 a 3). Cada strike aprovado remove 1.
//  absences       -> faltas justificadas em reuniões internas no ano (0 a 3).
//                    A 4ª falta gera desligamento, então o membro sai da lista.
//  externalEvents -> eventos externos em que o membro esteve neste semestre.
//                    A meta é pelo menos 1 (ver SEMESTER em pcdConfig.js).
//
// Só as quantidades aparecem no site. Os motivos ficam restritos ao membro e à gestão.
const players = [
  { id: 1, name: "antonio_castro", heart: 3, absences: 0, externalEvents: 2 },
  { id: 2, name: "arthur_cacciatore", heart: 3, absences: 0, externalEvents: 1 },
  { id: 3, name: "brenno_ostemberg", heart: 3, absences: 0, externalEvents: 1 },
  { id: 4, name: "djavan_loureiro", heart: 1, absences: 0, externalEvents: 0 },
  { id: 5, name: "edilson_enzo", heart: 3, absences: 0, externalEvents: 0 },
  { id: 6, name: "felipe_rosa", heart: 3, absences: 0, externalEvents: 0 },
  { id: 7, name: "gabriel_santos", heart: 3, absences: 0, externalEvents: 1 },
  { id: 8, name: "isabele_firmino", heart: 3, absences: 0, externalEvents: 1 },
  { id: 9, name: "jean_tezini", heart: 3, absences: 0, externalEvents: 2 },
  { id: 10, name: "joao_montera", heart: 3, absences: 0, externalEvents: 0 },
  { id: 11, name: "joao_brito", heart: 3, absences: 0, externalEvents: 1 },
  { id: 12, name: "julio_dalpiaz", heart: 3, absences: 0, externalEvents: 1 },
  { id: 13, name: "luis_santos", heart: 3, absences: 0, externalEvents: 1 },
  { id: 14, name: "marcus_madureira", heart: 3, absences: 0, externalEvents: 0 },
  { id: 15, name: "mateus_sposo", heart: 3, absences: 1, externalEvents: 0 },
  { id: 16, name: "vitor_garcia", heart: 3, absences: 0, externalEvents: 0 },
  { id: 17, name: "vitor_mandelli", heart: 3, absences: 0, externalEvents: 0 },
  { id: 18, name: "eduarda_moretto", heart: 3, absences: 0, externalEvents: 1 },

  { id: 19, name: "leticia_regina", heart: 3, absences: 0, externalEvents: 1 },
  { id: 20, name: "amanda_lopes", heart: 3, absences: 0, externalEvents: 0 },
  { id: 21, name: "paulo_lima", heart: 3, absences: 0, externalEvents: 1 },
  { id: 22, name: "joao_menatti", heart: 3, absences: 0, externalEvents: 1 },
  { id: 23, name: "jhonathan_soares", heart: 3, absences: 0, externalEvents: 0 },
  { id: 24, name: "guilherme_moura", heart: 3, absences: 0, externalEvents: 1 },
  { id: 25, name: "gabriel_aquino", heart: 3, absences: 0, externalEvents: 0 },
  { id: 26, name: "yan_oliveira", heart: 3, absences: 0, externalEvents: 0 },
  { id: 27, name: "heitor_cacciatore", heart: 3, absences: 0, externalEvents: 1 },
  { id: 28, name: "ivan_francisco", heart: 3, absences: 0, externalEvents: 1 },
  { id: 29, name: "giovana_muhl", heart: 3, absences: 0, externalEvents: 1 },
  { id: 30, name: "samyr_arruda", heart: 3, absences: 0, externalEvents: 0 },
  { id: 31, name: "carlos_sales", heart: 2, absences: 0, externalEvents: 0 },
];

export default players;
