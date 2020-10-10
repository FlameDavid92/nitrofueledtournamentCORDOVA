import React from 'react';

export default function InitForm({ setTournamentName, setNumGioc, setTipo, setInitForm }) {
    const inizializzaTorneo = (e) => {
        e.preventDefault();
        setNumGioc(parseInt(e.target.numGioc.value));
        setTipo(e.target.tipo.value);
        setInitForm(false);
        return;
    }
    return (
        <>
            <div className="row m-0 justify-content-center align-items-center h-75">
                <div className="col-12 col-md-4 p-0">
                    <form onSubmit={inizializzaTorneo}>
                        <div className="form-row text-center">
                            <div className="form-group col-12">
                                <div>
                                    <label className="my-label" htmlFor="inputState1">Torneo:</label>
                                    <input className="form-control form-control-sm mb-1" type="text" placeholder="Inserisci un nome per il torneo" required></input>
                                </div>
                                <div className="mt-2">
                                    <label className="my-label" htmlFor="inputState1">Tipologia torneo:</label>
                                    <select name="tipo" id="inputState1" className="form-control form-control-sm text-center" defaultValue="" required>
                                        <option disabled hidden value="">Scegli il tipo di torneo</option>
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="big">Big</option>
                                    </select>
                                </div>
                                <div className="mt-2">
                                    <label className="my-label" htmlFor="inputState2">Numero giocatori:</label>
                                    <select name="numGioc" id="inputState2" className="form-control form-control-sm text-center" defaultValue="" required>
                                        <option disabled hidden value="">Scegli il numero di giocatori</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                                <input className="btn btn-secondary mt-2" type="submit" value="Avanti" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}