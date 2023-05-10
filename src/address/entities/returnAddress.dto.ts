import { AddressEntity } from './address.entity';

export class ReturnAddressDto {
  complement: string;

  numberAddress: number;

  cep: string;

  city?: any;

  createdAt: Date;

  updatedAt: Date;

  constructor(address: AddressEntity) {
    this.complement = address.complement;
    this.numberAddress = address.numberAddress;
    this.cep = address.cep;
  }
}
