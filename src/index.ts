import { Socket } from "net";

export type VideohubOptions = {
  host: string;
  port: number;
  autoConnect?: boolean;
};

export class Videohub {
  private socket: Socket;

  constructor(private options: VideohubOptions) {
    this.socket = new Socket();

    if (options.autoConnect) {
      this.connect();
    }

    this.socket.on("data", console.log);
  }

  public connect() {
    this.socket.connect(this.options.port, this.options.host);
  }
}
