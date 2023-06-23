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
   * Send the AST query to the Lens-Beacon service (https://github.com/samply/lens-beacon-service).
   *
   * The service will add one measure report per Beacon provider, plus the relevant Beacon provider names
   * (which are used for labelling in the Lens GUI) to this.resultsSubject.
   *
   * @param query String containing serialized AST in JSON format.
   * @param measures Not used.
   *
   * Returns a unique ID.
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  async send(query: string, measures: Object[]): Promise<string> {
    this.resultsSubject$.next(new Map<string, any>())

    if (this.auth != "") {
      this.httpHeaders.append("Authorization", this.auth);
    }

    const httpOptions = {
      headers: this.httpHeaders
    };

    let beaconUrl = this.url.toString()

    let results = await firstValueFrom(this.client.post(beaconUrl + 'query/ast', query, httpOptions))
    let jsonParsedResults = JSON.parse(JSON.stringify(results))
    for (let i = 0; i < jsonParsedResults.length; i++) {
      let measureReport = jsonParsedResults[i].measureReport
      let siteName = jsonParsedResults[i].siteName
      let siteUrl = jsonParsedResults[i].siteUrl
      this.resultsSubject$.next(new Map<string, any>([[siteName, measureReport]]))
    }
    // Return an arbitrary unique ID
    return uuidv4();
  }
}
