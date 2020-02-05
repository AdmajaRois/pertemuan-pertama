import React, {Component} from "react";

class Table extends Component {
    render() {
      return (
        <div className="row">
            <div className="col-lg-12">
                <table className="table table-hover">
                    <thead>
                        <tr>#</tr>
                        <tr>First</tr>
                        <tr>Last</tr>
                        <tr>Handle</tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      )
    };
}