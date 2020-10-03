import * as React from 'react';
import styles from '../SinglePageApp.module.scss';

export default class Pages extends React.Component<any> {
  public render(): React.ReactElement<any> {
    return (
      <div className={ styles.singlePageApp }>
      <div className={ styles.container }>
      <div className={ styles.rowResult }>
            <span className={ styles.titleWhite }>Input</span>
          </div>
          
          <div className={ styles.rowTable }>
            
            <div className="table-responsive">
                        <table className="table">
                              <thead className=" text-primary thead-light">
                            <tr><th>
                            Worker
                            </th>
                            <th>
                            Batch ID
                            </th>
                            <th>
                            Start Date
                            </th>
                            <th>
                            End Date
                            </th>
                            <th>
                            Special Entry
                            </th>
                            <th>
                            Pay Component
                            </th>
                            
                        </tr></thead>
                        <tbody>
                            <tr>
                                <td>
                                Tom T Tester   
                                </td>
                                <td>
                                    
                                SLF-2018-06-07-INFO10 Sunlife Decuction                                                    
                                </td>
                                <td>
                                01/06/2018
                                </td>
                                <td>
                                15/06/2018
                                </td>
                                <td>
                                Yes
                                </td>  
                                <td>
                                Pension Staff
                                </td>  
                                                                                  
                            </tr>
                            <tr>
                                <td>
                                Tom T Tester   
                                </td>
                                <td>
                                    
                                SLF-2018-06-07-INFO10 Sunlife Decuction                                                    
                                </td>
                                <td>
                                01/06/2018
                                </td>
                                <td>
                                15/06/2018
                                </td>
                                <td>
                                Yes
                                </td>  
                                <td>
                                Pension Staff
                                </td>  
                                                                                  
                            </tr>
                            
                            <tr>
                                <td>
                                Tom T Tester   
                                </td>
                                <td>
                                    
                                SLF-2018-06-07-INFO10 Sunlife Decuction                                                    
                                </td>
                                <td>
                                01/06/2018
                                </td>
                                <td>
                                15/06/2018
                                </td>
                                <td>
                                Yes
                                </td>  
                                <td>
                                Pension Staff
                                </td>  
                                                                                  
                            </tr>
                            <tr>
                                <td>
                                Tom T Tester   
                                </td>
                                <td>
                                    
                                SLF-2018-06-07-INFO10 Sunlife Decuction                                                    
                                </td>
                                <td>
                                01/06/2018
                                </td>
                                <td>
                                15/06/2018
                                </td>
                                <td>
                                Yes
                                </td>  
                                <td>
                                Pension Staff
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
