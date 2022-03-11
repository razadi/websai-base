import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefeService {

  public valaduanas: any[];

  public refes: any[];
  public files: any[];
  public images: any[];
  public buscar: any[];
  public refesa: any[];
  public aduanasa: any[];



  constructor() { 

    this.valaduanas = [
      {adua: '470', anom: 'AICM', atot: '44', apor: '68', aimp: '40', apim: '91', aexp: '4', apex: '9'},
      {adua: '650', anom: 'TOL', atot: '7', apor: '11', aimp: '6', apim: '86', aexp: '1', apex: '14'},
      {adua: '160', anom: 'MZN', atot: '14', apor: '21', aimp: '14', apim: '100', aexp: '0', apex: '0'}
    ];

    this.refes = [
      {NUM_REFE: 'REF18000001', NUM_PEDI: '18000001', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000002', NUM_PEDI: '18000002', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'EXPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000003', NUM_PEDI: '18000003', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'RET', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000004', NUM_PEDI: '18000004', ADU_DESP: '160', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000005', NUM_PEDI: '18000005', ADU_DESP: '160', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000006', NUM_PEDI: '18000006', ADU_DESP: '160', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'R', OPERA: 'IMPO', EDOR: 'TER', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000007', NUM_PEDI: '18000007', ADU_DESP: '160', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000008', NUM_PEDI: '18000008', ADU_DESP: '160', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'RET', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000009', NUM_PEDI: '18000009', ADU_DESP: '160', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000010', NUM_PEDI: '18000010', ADU_DESP: '160', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'TER', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000011', NUM_PEDI: '18000011', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'RET', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000012', NUM_PEDI: '18000012', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'RET', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000013', NUM_PEDI: '18000013', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'TER', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000014', NUM_PEDI: '18000014', ADU_DESP: '650', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000015', NUM_PEDI: '18000015', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000016', NUM_PEDI: '18000016', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'TER', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000017', NUM_PEDI: '18000017', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000018', NUM_PEDI: '18000018', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000019', NUM_PEDI: '18000019', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'RET', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000020', NUM_PEDI: '18000020', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000021', NUM_PEDI: '18000021', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000022', NUM_PEDI: '18000022', ADU_DESP: '650', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'R', OPERA: 'IMPO', EDOR: 'TER', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000023', NUM_PEDI: '18000023', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000024', NUM_PEDI: '18000024', ADU_DESP: '650', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'RET', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000025', NUM_PEDI: '18000025', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000026', NUM_PEDI: '18000026', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'TER', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000027', NUM_PEDI: '18000027', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'RET', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000028', NUM_PEDI: '18000028', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'RET', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000029', NUM_PEDI: '18000029', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'TER', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000030', NUM_PEDI: '18000030', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'R', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000031', NUM_PEDI: '18000031', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000032', NUM_PEDI: '18000032', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'TER', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000033', NUM_PEDI: '18000033', ADU_DESP: '650', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000034', NUM_PEDI: '18000034', ADU_DESP: '650', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'EXPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000035', NUM_PEDI: '18000035', ADU_DESP: '650', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'RET', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000036', NUM_PEDI: '18000036', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000037', NUM_PEDI: '18000037', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000038', NUM_PEDI: '18000038', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'R', OPERA: 'IMPO', EDOR: 'TER', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000039', NUM_PEDI: '18000039', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'EXPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000040', NUM_PEDI: '18000040', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'RET', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000041', NUM_PEDI: '18000041', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000042', NUM_PEDI: '18000042', ADU_DESP: '650', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'TER', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000043', NUM_PEDI: '18000043', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'RET', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000044', NUM_PEDI: '18000044', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'RET', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000045', NUM_PEDI: '18000045', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'TER', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000046', NUM_PEDI: '18000046', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000047', NUM_PEDI: '18000047', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000048', NUM_PEDI: '18000048', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'TER', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000049', NUM_PEDI: '18000049', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000050', NUM_PEDI: '18000050', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'R', OPERA: 'EXPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000051', NUM_PEDI: '18000051', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'RET', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000052', NUM_PEDI: '18000052', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000053', NUM_PEDI: '18000053', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'R', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000054', NUM_PEDI: '18000054', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'R', OPERA: 'IMPO', EDOR: 'TER', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000055', NUM_PEDI: '18000055', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'EXPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000056', NUM_PEDI: '18000056', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'RET', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000057', NUM_PEDI: '18000057', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000058', NUM_PEDI: '18000058', ADU_DESP: '470', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'TER', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000059', NUM_PEDI: '18000059', ADU_DESP: '160', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'RET', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000060', NUM_PEDI: '18000060', ADU_DESP: '160', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'RET', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000061', NUM_PEDI: '18000061', ADU_DESP: '160', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'TER', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000062', NUM_PEDI: '18000062', ADU_DESP: '160', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000063', NUM_PEDI: '18000063', ADU_DESP: '160', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'PRO', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000064', NUM_PEDI: '18000064', ADU_DESP: '160', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'TER', NOM_IMP: 'NOMBRE DEL CLIENTE' },
      {NUM_REFE: 'REF18000065', NUM_PEDI: '18000065', ADU_DESP: '160', PAT_AGEN: '9999', FEC_ENTR: '01/Oct/2018', FEC_PAGO: '02/Oct/2018', CVE_PEDI: 'A1', TIPO: 'N', OPERA: 'IMPO', EDOR: 'TER', NOM_IMP: 'NOMBRE DEL CLIENTE' }
    ];

    this.files = [
      {item: 1, tipo: 'ADM', ico: 'fa-file-word-o', name: 'ANEXO22.doc', size: 1526, file: 'assets/images/files/ANEXO22.doc'},
      {item: 2, tipo: 'ADM', ico: 'fa-file-excel-o', name: 'Catalogo_Aduanas.xlsx', size: 12, file: 'assets/images/files/Catalogo_Aduanas.xlsx'},
      {item: 3, tipo: 'OPE', ico: 'fa-file-pdf-o', name: 'formato_pedimento.pdf', size: 40, file: 'assets/images/files/formato_pedimento.pdf'},
      {item: 4, tipo: 'ADM', ico: 'fa-file-word-o', name: 'formato-de-pedimento.doc', size: 309, file: 'assets/images/files/formato-de-pedimento.doc'},
      {item: 5, tipo: 'OPE', ico: 'fa-file-pdf-o', name: 'Formato-Pedimento-Aduanal.pdf', size: 119, file: 'assets/images/files/Formato-Pedimento-Aduanal.pdf'},
      {item: 6, tipo: 'ADM', ico: 'fa-file-pdf-o', name: 'FranciscoJavierQuesada_gastosIngresos.pdf', size: 217, file: 'assets/images/files/FranciscoJavierQuesada_gastosIngresos.pdf'},
      {item: 7, tipo: 'ADM', ico: 'fa-file-pdf-o', name: 'man_valor_aduana.pdf', size: 54, file: 'assets/images/files/man_valor_aduana.pdf'},
      {item: 8, tipo: 'OPE', ico: 'fa-file-pdf-o', name: 'Manifestacion-de-valor.pdf', size: 14, file: 'assets/images/files/Manifestacion-de-valor.pdf'},
      {item: 9, tipo: 'ADM', ico: 'fa-file-pdf-o', name: 'MANUAL_DE_CLAVES_PEDIMENTO.pdf', size: 914, file: 'assets/images/files/MANUAL_DE_CLAVES_PEDIMENTO.pdf'},
      {item: 10, tipo: 'OPE', ico: 'fa-file-pdf-o', name: 'MOA2012_a.pdf', size: 3977, file: 'assets/images/files/MOA2012_a.pdf'} 
    ];
  
    this.images = [
      {item: 1, image: 'assets/images/previos/REF1800000901.jpg', title: 'Imagen 1', descrip: 'Representa el item No. 1', fecha: '01/nov/2018'},
      {item: 2, image: 'assets/images/previos/REF1800000902.jpg', title: 'Imagen 2', descrip: 'Representa el item No. 2', fecha: '01/nov/2018'},
      {item: 3, image: 'assets/images/previos/REF1800000903.jpg', title: 'Imagen 3', descrip: 'Representa el item No. 3', fecha: '01/nov/2018'},
      {item: 4, image: 'assets/images/previos/REF1800000904.jpg', title: 'Imagen 4', descrip: 'Representa el item No. 4', fecha: '01/nov/2018'},
      {item: 5, image: 'assets/images/previos/REF1800000905.jpg', title: 'Imagen 5', descrip: 'Representa el item No. 5', fecha: '01/nov/2018'},
      {item: 6, image: 'assets/images/previos/REF1800000906.jpg', title: 'Imagen 6', descrip: 'Representa el item No. 6', fecha: '01/nov/2018'},
      {item: 7, image: 'assets/images/previos/REF1800000907.jpg', title: 'Imagen 7', descrip: 'Representa el item No. 7', fecha: '01/nov/2018'},
      {item: 8, image: 'assets/images/previos/REF1800000908.jpg', title: 'Imagen 8', descrip: 'Representa el item No. 8', fecha: '01/nov/2018'},
      {item: 9, image: 'assets/images/previos/REF1800000909.jpg', title: 'Imagen 9', descrip: 'Representa el item No. 9', fecha: '01/nov/2018'},
      {item: 10, image: 'assets/images/previos/REF1800000910.jpg', title: 'Imagen 10', descrip: 'Representa el item No. 10', fecha: '01/nov/2018'},
      {item: 11, image: 'assets/images/previos/REF1800000911.jpg', title: 'Imagen 11', descrip: 'Representa el item No. 11', fecha: '01/nov/2018'},
      {item: 12, image: 'assets/images/previos/REF1800000912.jpg', title: 'Imagen 12', descrip: 'Representa el item No. 12', fecha: '01/nov/2018'},
      {item: 13, image: 'assets/images/previos/REF1800000913.jpg', title: 'Imagen 13', descrip: 'Representa el item No. 13', fecha: '01/nov/2018'},
      {item: 14, image: 'assets/images/previos/REF1800000914.jpg', title: 'Imagen 14', descrip: 'Representa el item No. 14', fecha: '01/nov/2018'},
      {item: 15, image: 'assets/images/previos/REF1800000915.jpg', title: 'Imagen 15', descrip: 'Representa el item No. 15', fecha: '01/nov/2018'},
      {item: 16, image: 'assets/images/previos/REF1800000916.jpg', title: 'Imagen 16', descrip: 'Representa el item No. 16', fecha: '01/nov/2018'}
    ];

  }

  getEstatusRefe(refe: string) {
    // regresa el data de la api correspondiente
  }

  getRefesBuscar(termino: string) {
    this.buscar = this.refes.filter( data => {
      return data.NUM_REFE.toLowerCase().includes(termino.toLowerCase()) ||
             data.NUM_PEDI.toLowerCase().includes(termino.toLowerCase()) ||
             data.ADU_DESP.toLowerCase().includes(termino.toLowerCase()) ||
             data.FEC_ENTR.toLowerCase().includes(termino.toLowerCase()) ||
             data.FEC_PAGO.toLowerCase().includes(termino.toLowerCase()) ||
             data.NOM_IMP.toLowerCase().includes(termino.toLowerCase());
    });
    // console.log(this.buscar);
    
  }

  getRefesAduana(adua: string) {

    this.refesa = this.refes.filter( data => {
      return data.ADU_DESP.toLowerCase().includes(adua.toLowerCase());
    });
    // console.log('primero', this.valaduanas);
    this.aduanasa = this.valaduanas.filter( valor => {
      return valor.adua === adua;
    });
    // console.log('segundo', this.valaduanas);
    
  }


}
