import React from 'react';
import './list.css';

/*export default class List extends React.Component {

    render() {
        return (
            <table class="ui celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>Approved</td>
                        <td>None</td>
                    </tr>
                    <tr>
                        <td>Jamie</td>
                        <td>Approved</td>
                        <td>Requires call</td>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Denied</td>
                        <td>None</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr><th>3 People</th>
                        <th>2 Approved</th>
                        <th></th>
                    </tr></tfoot>
            </table>
        );
    }
}