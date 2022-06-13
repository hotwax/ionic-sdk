import { Enumeration, Party, Status } from "./index"

export interface Asset {
  assetId: string,
  parentAssetId?: string,
  assetTypeEnumId?: string,
  classEnumId?: string,
  statusId?: string,
  ownerPartyId?: string,
  assetPoolId?: string,
  productId?: string,
  hasQuantity?: string,
  quantityOnHandTotal?: number,
  availableToPromiseTotal?: number,
  originalQuantity?: number,
  originalQuantityUomId?: string,
  assetName?: string,
  comments?: string,
  serialNumber?: string,
  softIdentifier?: string,
  activationNumber?: string,
  activationValidThru?: string,
  receivedDate?: string,
  acquiredDate?: string,
  manufacturedDate?: string,
  expectedEndOfLife?: string,
  actualEndOfLife?: string,
  capacity?: number,
  capacityUomId?: string,
  facilityId?: string,
  locationSeqId?: string,
  containerId?: string,
  shipmentBoxTypeId?: string,
  lotId?: string,
  geoPointId?: string,
  originId?: string,
  originFacilityId?: string,
  acquireOrderId?: string,
  acquireOrderItemSeqId?: string,
  acquireWorkEffortId?: string,
  acquireShipmentId?: string,
  acquireCost?: number,
  acquireCostUomId?: string,
  salvageValue?: number,
  depreciation?: number,
  depreciationTypeEnumId?: string,
  yearBeginDepreciation?: number,
  taxDepreciation?: number,
  taxDepreciationTypeEnumId?: string,
  parent?: {  // Asset
    assetId?: string,
    parentAssetId?: string,
    assetTypeEnumId?: string,
    classEnumId?: string,
    statusId?: string,
    ownerPartyId?: string,
    assetPoolId?: string,
    productId?: string,
    hasQuantity?: string,
    quantityOnHandTotal?: number,
    availableToPromiseTotal?: number,
    originalQuantity?: number,
    originalQuantityUomId?: string,
    assetName?: string,
    comments?: string,
    serialNumber?: string,
    softIdentifier?: string,
    activationNumber?: string,
    activationValidThru?: string,
    receivedDate?: string,
    acquiredDate?: string,
    manufacturedDate?: string,
    expectedEndOfLife?: string,
    actualEndOfLife?: string,
    capacity?: number,
    capacityUomId?: string,
    facilityId?: string,
    locationSeqId?: string,
    containerId?: string,
    shipmentBoxTypeId?: string,
    lotId?: string,
    geoPointId?: string,
    originId?: string,
    originFacilityId?: string,
    acquireOrderId?: string,
    acquireOrderItemSeqId?: string,
    acquireWorkEffortId?: string,
    acquireShipmentId?: string,
    acquireCost?: number,
    acquireCostUomId?: string,
    salvageValue?: number,
    depreciation?: number,
    depreciationTypeEnumId?: string,
    yearBeginDepreciation?: number,
    taxDepreciation?: number,
    taxDepreciationTypeEnumId?: string
  },
  type?: Enumeration,
  class?: Enumeration,
  status?: Status,
  owner?: Party,
  originalQuantityUom?: {
    uomId?: string,
    uomTypeEnumId?: string,
    abbreviation?: string,
    description?: string
  },
  originFacility?: {
    facilityId?: string,
    pseudoId?: string,
    facilityTypeEnumId?: string,
    parentFacilityId?: string,
    statusId?: string,
    ownerPartyId?: string,
    facilityName?: string,
    facilitySize?: number,
    facilitySizeUomId?: string,
    openedDate?: string,
    closedDate?: string,
    description?: string,
    geoId?: string,
    geoPointId?: string,
    countyGeoId?: string,
    stateGeoId?: string,
    assetAllowOtherOwner?: string,
    assetAllowIssueOverQoh?: string,
    assetInventoryLocRequire?: string,
    defaultDaysToShip?: number,
    externalId?: string,
    originId?: string
  },
  facility?: {
    facilityId?: string,
    pseudoId?: string,
    facilityTypeEnumId?: string,
    parentFacilityId?: string,
    statusId?: string,
    ownerPartyId?: string,
    facilityName?: string,
    facilitySize?: number,
    facilitySizeUomId?: string,
    openedDate?: string,
    closedDate?: string,
    description?: string,
    geoId?: string,
    geoPointId?: string,
    countyGeoId?: string,
    stateGeoId?: string,
    assetAllowOtherOwner?: string,
    assetAllowIssueOverQoh?: string,
    assetInventoryLocRequire?: string,
    defaultDaysToShip?: number,
    externalId?: string,
    originId?: string
  },
  location?: {
    facilityId?: string,
    locationSeqId?: string,
    locationTypeEnumId?: string,
    description?: string,
    areaId?: string,
    aisleId?: string,
    sectionId?: string,
    levelId?: string,
    positionId?: string,
    geoPointId?: string,
    capacity?: number,
    capacityUomId?: string,
    sequenceNum?: number
  },
  container?: {
    containerId?: string,
    serialNumber?: string,
    containerTypeEnumId?: string,
    createdDate?: string,
    description?: string,
    externalId?: string,
    facilityId?: string,
    locationSeqId?: string,
    geoPointId?: string
  },
  boxType?: {
    shipmentBoxTypeId?: string,
    pseudoId?: string,
    description?: string,
    dimensionUomId?: string,
    boxLength?: number,
    boxWidth?: number,
    boxHeight?: number,
    weightUomId?: string,
    boxWeight?: number,
    defaultGrossWeight?: number,
    capacityUomId?: string,
    boxCapacity?: number,
    gatewayBoxId?: string
  },
  lot?: {
    lotId?: string,
    mfgPartyId?: string,
    lotNumber?: string,
    quantity?: number,
    manufacturedDate?: string,
    expirationDate?: string
  },
  geoPoint?: {
    geoPointId?: string,
    geoPointTypeEnumId?: string,
    description?: string,
    dataSourceId?: string,
    latitude?: number,
    longitude?: number,
    elevation?: number,
    elevationUomId?: string,
    information?: string
  },
  acquireOrderItem?: {
    orderId?: string,
    orderItemSeqId?: string,
    orderPartSeqId?: string,
    parentItemSeqId?: string,
    itemTypeEnumId?: string,
    productId?: string,
    productFeatureId?: string,
    otherPartyProductId?: string,
    productParameterSetId?: string,
    itemDescription?: string,
    comments?: string,
    quantity?: number,
    quantityUomId?: string,
    quantityCancelled?: number,
    selectedAmount?: number,
    priority?: number,
    requiredByDate?: string,
    unitAmount?: number,
    unitListPrice?: number,
    isModifiedPrice?: string,
    standardCost?: number,
    externalItemSeqId?: string,
    fromAssetId?: string,
    productPriceId?: string,
    productCategoryId?: string,
    isPromo?: string,
    promoQuantity?: number,
    promoTimesUsed?: number,
    storePromotionId?: string,
    promoCodeId?: string,
    promoCodeText?: string,
    subscriptionId?: string,
    finAccountId?: string,
    finAccountTransId?: string,
    overrideGlAccountId?: string,
    salesOpportunityId?: string,
    sourceReferenceId?: string,
    sourcePercentage?: number,
    amountAlreadyIncluded?: number,
    exemptAmount?: number,
    customerReferenceId?: string,
    taxAuthorityId?: string
  },
  acquireWorkEffort?: {
    workEffortId?: string,
    universalId?: string,
    sourceReferenceId?: string,
    parentWorkEffortId?: string,
    rootWorkEffortId?: string,
    workEffortTypeEnumId?: string,
    purposeEnumId?: string,
    visibilityEnumId?: string,
    resolutionEnumId?: string,
    workTypeEnumId?: string,
    ownerPartyId?: string,
    productStoreId?: string,
    statusId?: string,
    statusFlowId?: string,
    priority?: number,
    sendNotificationEmail?: string,
    percentComplete?: number,
    revisionNumber?: number,
    workEffortName?: string,
    description?: string,
    location?: string,
    facilityId?: string,
    infoUrl?: string,
    shipmentMethodEnumId?: string,
    estimatedStartDate?: string,
    estimatedCompletionDate?: string,
    actualStartDate?: string,
    actualCompletionDate?: string,
    recurStartCron?: string,
    recurLimit?: number,
    recurEndDate?: string,
    allDayStart?: string,
    allDayEnd?: string,
    estimatedWorkTime?: number,
    estimatedSetupTime?: number,
    remainingWorkTime?: number,
    actualWorkTime?: number,
    actualSetupTime?: number,
    totalTimeAllowed?: number,
    estimatedWorkDuration?: number,
    actualWorkDuration?: number,
    actualBreakDuration?: number,
    timeUomId?: string,
    actualCost?: number,
    actualClientCost?: number,
    totalClientCostAllowed?: number,
    costUomId?: string
  },
  acquireShipment?: {
    shipmentId?: string,
    shipmentTypeEnumId?: string,
    statusId?: string,
    fromPartyId?: string,
    toPartyId?: string,
    binLocationNumber?: number,
    productStoreId?: string,
    priority?: number,
    entryDate?: string,
    shipAfterDate?: string,
    shipBeforeDate?: string,
    estimatedReadyDate?: string,
    estimatedShipDate?: string,
    estimatedArrivalDate?: string,
    latestCancelDate?: string,
    packedDate?: string,
    pickContainerId?: string,
    shipWorkEffortId?: string,
    receiveWorkEffortId?: string,
    assemblyWorkEffortId?: string,
    estimatedShipCost?: number,
    costUomId?: string,
    addtlShippingCharge?: number,
    addtlShippingChargeDesc?: string,
    signatureRequiredEnumId?: string,
    handlingInstructions?: string,
    otherPartyOrderId?: string,
    systemMessageRemoteId?: string,
    externalId?: string,
    originId?: string
  },
  acquireCostUom?: {
    uomId?: string,
    uomTypeEnumId?: string,
    abbreviation?: string,
    description?: string
  },
  depreciationType?: Enumeration,
  taxDepreciationType?: Enumeration,
  details?: Array<{
    assetDetailId?: string,
    assetId?: string,
    effectiveDate?: string,
    quantityOnHandDiff?: number,
    availableToPromiseDiff?: number,
    unitCost?: number,
    assetReservationId?: string,
    otherAssetId?: string,
    shipmentId?: string,
    productId?: string,
    orderId?: string,
    orderItemSeqId?: string,
    returnId?: string,
    returnItemSeqId?: string,
    workEffortId?: string,
    assetMaintenanceId?: string,
    assetIssuanceId?: string,
    assetReceiptId?: string,
    physicalInventoryId?: string,
    physicalInventoryCountId?: string,
    varianceReasonEnumId?: string,
    description?: string,
    acctgTransResultEnumId?: string
  }>,
  depreciations?: Array<{
    assetId?: string,
    timePeriodId?: string,
    monthlyDepreciation?: number,
    annualDepreciation?: number,
    yearBeginDepreciation?: number,
    isLastYearPeriod?: string,
    usefulLifeYears?: number,
    yearsRemaining?: number,
    acctgTransId?: string
  }>,
  identifications?: Array<{
    assetId?: string,
    identificationTypeEnumId?: string,
    idValue?: string
  }>,
  partyAssignments?: Array<{
    assetId?: string,
    partyId?: string,
    roleTypeId?: string,
    fromDate?: string,
    thruDate?: string,
    allocatedDate?: string,
    statusId?: string,
    comments?: string
  }>,
  issuances?: Array<{
    assetIssuanceId?: string,
    assetId?: string,
    assetReservationId?: string,
    orderId?: string,
    orderItemSeqId?: string,
    shipmentId?: string,
    shipmentItemSourceId?: string,
    productId?: string,
    invoiceId?: string,
    invoiceItemSeqId?: string,
    returnId?: string,
    returnItemSeqId?: string,
    workEffortId?: string,
    facilityId?: string,
    assetMaintenanceId?: string,
    issuedByUserId?: string,
    issuedDate?: string,
    quantity?: number,
    quantityCancelled?: number,
    acctgTransResultEnumId?: string
  }>,
  reservations?: Array<{
    assetReservationId?: string,
    assetId?: string,
    productId?: string,
    orderId?: string,
    orderItemSeqId?: string,
    reservationOrderEnumId?: string,
    quantity?: number,
    quantityNotAvailable?: number,
    quantityNotIssued?: number,
    reservedDate?: string,
    originalPromisedDate?: string,
    currentPromisedDate?: string,
    priority?: number,
    sequenceNum?: number
  }>,
  receipts?: Array<{
    assetReceiptId?: string,
    assetId?: string,
    productId?: string,
    orderId?: string,
    orderItemSeqId?: string,
    shipmentId?: string,
    shipmentItemSourceId?: string,
    shipmentPackageSeqId?: string,
    invoiceId?: string,
    invoiceItemSeqId?: string,
    returnId?: string,
    returnItemSeqId?: string,
    workEffortId?: string,
    receivedByUserId?: string,
    receivedDate?: string,
    itemDescription?: string,
    quantityAccepted?: number,
    quantityRejected?: number,
    rejectionReasonEnumId?: string,
    acctgTransResultEnumId?: string
  }>
}