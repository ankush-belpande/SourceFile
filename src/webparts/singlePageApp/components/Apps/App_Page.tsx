import * as React from 'react';
import styles from '../SinglePageApp.module.scss';
import { ISinglePageAppProps } from '../ISinglePageAppProps';
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min';
import { Button } from 'office-ui-fabric-react/lib/Button';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

export default class AppPage extends React.Component<any> {
  public render(): React.ReactElement<any> {
    return (
      <div className={ styles.singlePageApp }>

          <div className={ styles.container }>
          <div className={ styles.rowResult }>
            <span className={ styles.titleWhite }>Payslips</span>
          </div>
          
          <div className={ styles.rowTable }>
            
            <div className="table-responsive">
                        <table className="table">
                              <thead className=" text-primary thead-light">
                            <tr><th>
                              Details
                            </th>
                            <th>
                            Pay Period End
                            </th>
                            <th>
                            Period Gross Pay
                            </th>
                            <th>
                            Period Deductions
                            </th>
                            <th>
                            Period Net Pay
                            </th>
                            
                        </tr></thead>
                        <tbody>
                            <tr>
                                <td>
                                    <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                            <i className="material-icons">search</i>
                                    </button>    
                                </td>
                                <td>
                                    
                                15-Apr-2018                                                    
                                </td>
                                <td>
                                10,000.00
                                </td>
                                <td>
                                1,000.00
                                </td>
                                <td>
                                9,000.00
                                </td>    
                                                                                  
                            </tr>
                            <tr>
                                <td>
                                    <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                            <i className="material-icons">search</i>
                                    </button>    
                                </td>
                                <td>
                                    
                                15-Apr-2018                                                    
                                </td>
                                <td>
                                10,000.00
                                </td>
                                <td>
                                1,000.00
                                </td>
                                <td>
                                9,000.00
                                </td>    
                                                                                  
                            </tr>
                            <tr>
                                <td>
                                    <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                            <i className="material-icons">search</i>
                                    </button>    
                                </td>
                                <td>
                                    
                                15-Apr-2018                                                    
                                </td>
                                <td>
                                10,000.00
                                </td>
                                <td>
                                1,000.00
                                </td>
                                <td>
                                9,000.00
                                </td>    
                                                                                  
                            </tr>
                                    
                        </tbody>
                    </table>
            </div>
          </div>
          </div>
        </div>
        
    );
  }
}
