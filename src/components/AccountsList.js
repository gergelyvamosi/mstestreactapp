import React, { useState } from "react";
import AccountDataService from "../services/AccountsService";

const AccountsList = () => {
  const [accounts, setAccounts] = useState([]);
  const [searchNumber, setSearchNumber] = useState("");
  const [searchName, setSearchName] = useState("");

  const onChangeSearchNumber = e => {
    const searchNumber = e.target.value;
    setSearchNumber(searchNumber);
  };

  const onChangeSearchName = e => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const findByNumber = () => {
    AccountDataService.findByNumber(searchNumber)
      .then(response => {
        setAccounts(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByName = () => {
    AccountDataService.findByName(searchName)
      .then(response => {
        setAccounts(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="e.g. 123456789"
            value={searchNumber}
            onChange={onChangeSearchNumber}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByNumber}
            >
              Search by number
            </button>
          </div>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="e.g. k"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Search by name
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Accounts List</h4>

        <ul className="list-group">
          {accounts &&
            accounts.map((account, index) => (
              <li
                className={
                  "list-group-item "
                }
              >
                {account.id + ' ' + account.number + ' ' + account.owner}
              </li>
            ))}
        </ul>

      </div>
    </div>
  );
};

export default AccountsList;
