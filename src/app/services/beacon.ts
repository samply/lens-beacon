import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, firstValueFrom, Observable} from "rxjs";
import {
  Operation,
  RequestTarget
} from "@samply/lens-core";
import {v4 as uuidv4} from "uuid";

/**
 * Deal with queries which should be handled by sites providing the Beacon search API.
 */
export class Beacon implements RequestTarget {

  private httpHeaders: HttpHeaders;

  private resultsSubject$: BehaviorSubject<Map<string, any>> = new BehaviorSubject<Map<string, any>>(new Map<string, any>([[this.key, {}]]));
  public results$: Observable<any> = this.resultsSubject$.asObservable();
  public isLoadingSubject$ = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoadingSubject$.asObservable();
  public client!: HttpClient

  constructor(
    public key: string,
    public url: URL,
    public auth: string = "",
  ) {
    this.httpHeaders = new HttpHeaders()
      .append('Access-Control-Allow-Origin', '*')
      .append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
      .append('Access-Control-Allow-Headers', 'append,delete,entries,foreach,get,has,keys,set,values,Authorization')
      .append('Accept', '*/*')
      .append('Accept-Encoding', 'gzip, deflate, br')
      .append('Connection', 'keep-alive')
      .append('Content-Type', 'application/json');
  }

  /**
   * Send the AST query to the Lens-Beacon service (https://github.com/samply/lens_beacon_service).
   *
   * The service will add one measure report per service, plus the relevant service names
   * (which are used for labelling in the Lens GUI) to this.resultsSubject.
   *
   * @param query Not used.
   * @param measures Not used.
   * @param treeQuery AST query object.
   */
  // async send(query: string, measures: Object[], treeQuery: Operation): Promise<string> {
  // eslint-disable-next-line @typescript-eslint/ban-types
  async send(query: string, measures: Object[]): Promise<string> {
    // Return an arbitrary unique ID
    return uuidv4();
  }
}
