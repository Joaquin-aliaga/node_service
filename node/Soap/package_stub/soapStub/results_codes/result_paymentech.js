var services = { /* Services */

  PaymentechGateway: { /* Ports */

    PaymentechGateway: { /* Methods */

      NewOrder: function(args, callback, headers, req) {
        /*
          args = {
                 newOrderRequest of type  {
                         orbitalConnectionUsername of type xsd:string
                         orbitalConnectionPassword of type xsd:string
                         version of type xsd:string
                         industryType of type xsd:string
                         transType of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         terminalID of type xsd:string
                         cardBrand of type xsd:string
                         ccAccountNum of type xsd:string
                         ccExp of type xsd:string
                         ccCardVerifyPresenceInd of type xsd:string
                         ccCardVerifyNum of type xsd:string
                         switchSoloIssueNum of type xsd:string
                         switchSoloCardStartDate of type xsd:string
                         ecpCheckRT of type xsd:string
                         ecpCheckDDA of type xsd:string
                         ecpBankAcctType of type xsd:string
                         ecpAuthMethod of type xsd:string
                         ecpDelvMethod of type xsd:string
                         avsZip of type xsd:string
                         avsAddress1 of type xsd:string
                         avsAddress2 of type xsd:string
                         avsCity of type xsd:string
                         avsState of type xsd:string
                         avsName of type xsd:string
                         avsCountryCode of type xsd:string
                         avsPhone of type xsd:string
                         useCustomerRefNum of type xsd:string
                         addProfileFromOrder of type xsd:string
                         customerRefNum of type xsd:string
                         profileOrderOverideInd of type xsd:string
                         authenticationECIInd of type xsd:string
                         verifyByVisaCAVV of type xsd:string
                         verifyByVisaXID of type xsd:string
                         priorAuthCd of type xsd:string
                         orderID of type xsd:string
                         amount of type xsd:string
                         comments of type xsd:string
                         shippingRef of type xsd:string
                         taxInd of type xsd:string
                         taxAmount of type xsd:string
                         amexTranAdvAddn1 of type xsd:string
                         amexTranAdvAddn2 of type xsd:string
                         amexTranAdvAddn3 of type xsd:string
                         amexTranAdvAddn4 of type xsd:string
                         mcSecureCodeAAV of type xsd:string
                         softDescMercName of type xsd:string
                         softDescProdDesc of type xsd:string
                         softDescMercCity of type xsd:string
                         softDescMercPhone of type xsd:string
                         softDescMercURL of type xsd:string
                         softDescMercEmail of type xsd:string
                         recurringInd of type xsd:string
                         txRefNum of type xsd:string
                         retryTrace of type xsd:string
                         pCardOrderID of type xsd:string
                         pCardDestZip of type xsd:string
                         pCardDestName of type xsd:string
                         pCardDestAddress of type xsd:string
                         pCardDestAddress2 of type xsd:string
                         pCardDestCity of type xsd:string
                         pCardDestStateCd of type xsd:string
                         pCard3FreightAmt of type xsd:string
                         pCard3DutyAmt of type xsd:string
                         pCard3DestCountryCd of type xsd:string
                         pCard3ShipFromZip of type xsd:string
                         pCard3DiscAmt of type xsd:string
                         pCard3VATtaxAmt of type xsd:string
                         pCard3VATtaxRate of type xsd:string
                         pCard3AltTaxInd of type xsd:string
                         pCard3AltTaxAmt of type xsd:string
                         pCard3LineItemCount of type xsd:string
                         pCard3LineItems of type  {
                                 item[] of type  {
                                         pCard3DtlIndex of type xsd:string
                                         pCard3DtlDesc of type xsd:string
                                         pCard3DtlProdCd of type xsd:string
                                         pCard3DtlQty of type xsd:string
                                         pCard3DtlUOM of type xsd:string
                                         pCard3DtlTaxAmt of type xsd:string
                                         pCard3DtlTaxRate of type xsd:string
                                         pCard3Dtllinetot of type xsd:string
                                         pCard3DtlDisc of type xsd:string
                                         pCard3DtlCommCd of type xsd:string
                                         pCard3DtlUnitCost of type xsd:string
                                         pCard3DtlGrossNet of type xsd:string
                                         pCard3DtlTaxType of type xsd:string
                                         pCard3DtlDiscInd of type xsd:string
                                         pCard3DtlDebitInd of type xsd:string
                                         targetNSAlias of type ns
                                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                                   }
                                 targetNSAlias of type ns
                                 targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                           }
                         magStripeTrack1 of type xsd:string
                         magStripeTrack2 of type xsd:string
                         retailTransInfo of type xsd:string
                         customerName of type xsd:string
                         customerEmail of type xsd:string
                         customerPhone of type xsd:string
                         cardPresentInd of type xsd:string
                         euddBankSortCode of type xsd:string
                         euddCountryCode of type xsd:string
                         euddRibCode of type xsd:string
                         bmlCustomerIP of type xsd:string
                         bmlCustomerEmail of type xsd:string
                         bmlShippingCost of type xsd:string
                         bmlTNCVersion of type xsd:string
                         bmlCustomerRegistrationDate of type xsd:string
                         bmlCustomerTypeFlag of type xsd:string
                         bmlItemCategory of type xsd:string
                         bmlPreapprovalInvitationNum of type xsd:string
                         bmlMerchantPromotionalCode of type xsd:string
                         bmlCustomerBirthDate of type xsd:string
                         bmlCustomerSSN of type xsd:string
                         bmlCustomerAnnualIncome of type xsd:string
                         bmlCustomerResidenceStatus of type xsd:string
                         bmlCustomerCheckingAccount of type xsd:string
                         bmlCustomerSavingsAccount of type xsd:string
                         bmlProductDeliveryType of type xsd:string
                         avsDestName of type xsd:string
                         avsDestAddress1 of type xsd:string
                         avsDestAddress2 of type xsd:string
                         avsDestCity of type xsd:string
                         avsDestState of type xsd:string
                         avsDestZip of type xsd:string
                         avsDestCountryCode of type xsd:string
                         avsDestPhoneNum of type xsd:string
                         debitBillerReferenceNumber of type xsd:string
                         mbType of type xsd:string
                         mbOrderIdGenerationMethod of type xsd:string
                         mbRecurringStartDate of type xsd:string
                         mbRecurringEndDate of type xsd:string
                         mbRecurringNoEndDateFlag of type xsd:string
                         mbRecurringMaxBillings of type xsd:string
                         mbRecurringFrequency of type xsd:string
                         mbMicroPaymentMaxDollarValue of type xsd:string
                         mbMicroPaymentMaxBillingDays of type xsd:string
                         mbMicroPaymentMaxTransactions of type xsd:string
                         mbDeferredBillDate of type xsd:string
                         debitPinNumber of type xsd:string
                         debitPinSecurityControl of type xsd:string
                         debitPinCashBack of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }
          }
        */
        //
        // Your code
        //
        /* return {
                 return of type  {
                         version of type xsd:string
                         industryType of type xsd:string
                         transType of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         terminalID of type xsd:string
                         cardBrand of type xsd:string
                         orderID of type xsd:string
                         txRefNum of type xsd:string
                         txRefIdx of type xsd:string
                         respDateTime of type xsd:string
                         procStatus of type xsd:string
                         approvalStatus of type xsd:string
                         respCode of type xsd:string
                         avsRespCode of type xsd:string
                         cvvRespCode of type xsd:string
                         authorizationCode of type xsd:string
                         mcRecurringAdvCode of type xsd:string
                         visaVbVRespCode of type xsd:string
                         procStatusMessage of type xsd:string
                         respCodeMessage of type xsd:string
                         hostRespCode of type xsd:string
                         hostAVSRespCode of type xsd:string
                         hostCVVRespCode of type xsd:string
                         retryTrace of type xsd:string
                         retryAttempCount of type xsd:string
                         lastRetryDate of type xsd:string
                         customerRefNum of type xsd:string
                         customerName of type xsd:string
                         profileProcStatus of type xsd:string
                         profileProcStatusMsg of type xsd:string
                         giftCardInd of type xsd:string
                         remainingBalance of type xsd:string
                         requestAmount of type xsd:string
                         redeemedAmount of type xsd:string
                         ccAccountNum of type xsd:string
                         debitBillerReferenceNumber of type xsd:string
                         mbMicroPaymentDaysLeft of type xsd:string
                         mbMicroPaymentDollarsLeft of type xsd:string
                         mbStatus of type xsd:string
                         debitPinSurchargeAmount of type xsd:string
                         debitPinTraceNumber of type xsd:string
                         debitPinNetworkID of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }

        }; */
      },
      MarkForCapture: function(args, callback, headers, req) {
        /*
          args = {
                 markForCaptureRequest of type  {
                         orbitalConnectionUsername of type xsd:string
                         orbitalConnectionPassword of type xsd:string
                         orderID of type xsd:string
                         amount of type xsd:string
                         taxInd of type xsd:string
                         taxAmount of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         terminalID of type xsd:string
                         txRefNum of type xsd:string
                         retryTrace of type xsd:string
                         pCardOrderID of type xsd:string
                         pCardDestZip of type xsd:string
                         pCardDestName of type xsd:string
                         pCardDestAddress of type xsd:string
                         pCardDestAddress2 of type xsd:string
                         pCardDestCity of type xsd:string
                         pCardDestStateCd of type xsd:string
                         amexTranAdvAddn1 of type xsd:string
                         amexTranAdvAddn2 of type xsd:string
                         amexTranAdvAddn3 of type xsd:string
                         amexTranAdvAddn4 of type xsd:string
                         pCard3FreightAmt of type xsd:string
                         pCard3DutyAmt of type xsd:string
                         pCard3DestCountryCd of type xsd:string
                         pCard3ShipFromZip of type xsd:string
                         pCard3DiscAmt of type xsd:string
                         pCard3VATtaxAmt of type xsd:string
                         pCard3VATtaxRate of type xsd:string
                         pCard3AltTaxInd of type xsd:string
                         pCard3AltTaxAmt of type xsd:string
                         pCard3LineItemCount of type xsd:string
                         pCard3LineItems of type  {
                                 item[] of type  {
                                         pCard3DtlIndex of type xsd:string
                                         pCard3DtlDesc of type xsd:string
                                         pCard3DtlProdCd of type xsd:string
                                         pCard3DtlQty of type xsd:string
                                         pCard3DtlUOM of type xsd:string
                                         pCard3DtlTaxAmt of type xsd:string
                                         pCard3DtlTaxRate of type xsd:string
                                         pCard3Dtllinetot of type xsd:string
                                         pCard3DtlDisc of type xsd:string
                                         pCard3DtlCommCd of type xsd:string
                                         pCard3DtlUnitCost of type xsd:string
                                         pCard3DtlGrossNet of type xsd:string
                                         pCard3DtlTaxType of type xsd:string
                                         pCard3DtlDiscInd of type xsd:string
                                         pCard3DtlDebitInd of type xsd:string
                                         targetNSAlias of type ns
                                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                                   }
                                 targetNSAlias of type ns
                                 targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                           }
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }
          }
        */
        //
        // Your code
        //
        /* return {
                 return of type  {
                         bin of type xsd:string
                         merchantID of type xsd:string
                         terminalID of type xsd:string
                         orderID of type xsd:string
                         txRefNum of type xsd:string
                         txRefIdx of type xsd:string
                         splitTxRefIdx of type xsd:string
                         amount of type xsd:string
                         respDateTime of type xsd:string
                         procStatus of type xsd:string
                         procStatusMessage of type xsd:string
                         retryTrace of type xsd:string
                         retryAttempCount of type xsd:string
                         lastRetryDate of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }

        }; */
      },
      MarkForCapture2: function(args, callback, headers, req) {
        /*
          args = {
                 markForCaptureRequest of type  {
                         orbitalConnectionUsername of type xsd:string
                         orbitalConnectionPassword of type xsd:string
                         orderID of type xsd:string
                         amount of type xsd:string
                         taxInd of type xsd:string
                         taxAmount of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         terminalID of type xsd:string
                         txRefNum of type xsd:string
                         retryTrace of type xsd:string
                         pCardOrderID of type xsd:string
                         pCardDestZip of type xsd:string
                         pCardDestName of type xsd:string
                         pCardDestAddress of type xsd:string
                         pCardDestAddress2 of type xsd:string
                         pCardDestCity of type xsd:string
                         pCardDestStateCd of type xsd:string
                         amexTranAdvAddn1 of type xsd:string
                         amexTranAdvAddn2 of type xsd:string
                         amexTranAdvAddn3 of type xsd:string
                         amexTranAdvAddn4 of type xsd:string
                         pCard3FreightAmt of type xsd:string
                         pCard3DutyAmt of type xsd:string
                         pCard3DestCountryCd of type xsd:string
                         pCard3ShipFromZip of type xsd:string
                         pCard3DiscAmt of type xsd:string
                         pCard3VATtaxAmt of type xsd:string
                         pCard3VATtaxRate of type xsd:string
                         pCard3AltTaxInd of type xsd:string
                         pCard3AltTaxAmt of type xsd:string
                         pCard3LineItemCount of type xsd:string
                         pCard3LineItems of type  {
                                 item[] of type  {
                                         pCard3DtlIndex of type xsd:string
                                         pCard3DtlDesc of type xsd:string
                                         pCard3DtlProdCd of type xsd:string
                                         pCard3DtlQty of type xsd:string
                                         pCard3DtlUOM of type xsd:string
                                         pCard3DtlTaxAmt of type xsd:string
                                         pCard3DtlTaxRate of type xsd:string
                                         pCard3Dtllinetot of type xsd:string
                                         pCard3DtlDisc of type xsd:string
                                         pCard3DtlCommCd of type xsd:string
                                         pCard3DtlUnitCost of type xsd:string
                                         pCard3DtlGrossNet of type xsd:string
                                         pCard3DtlTaxType of type xsd:string
                                         pCard3DtlDiscInd of type xsd:string
                                         pCard3DtlDebitInd of type xsd:string
                                         targetNSAlias of type ns
                                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                                   }
                                 targetNSAlias of type ns
                                 targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                           }
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }
          }
        */
        //
        // Your code
        //
        /* return {
                 return of type  {
                         bin of type xsd:string
                         merchantID of type xsd:string
                         terminalID of type xsd:string
                         orderID of type xsd:string
                         txRefNum of type xsd:string
                         txRefIdx of type xsd:string
                         splitTxRefIdx of type xsd:string
                         amount of type xsd:string
                         respDateTime of type xsd:string
                         procStatus of type xsd:string
                         procStatusMessage of type xsd:string
                         approvalStatus of type xsd:string
                         respCode of type xsd:string
                         avsRespCode of type xsd:string
                         authorizationCode of type xsd:string
                         respCodeMessage of type xsd:string
                         hostRespCode of type xsd:string
                         hostAVSRespCode of type xsd:string
                         retryTrace of type xsd:string
                         retryAttempCount of type xsd:string
                         lastRetryDate of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }

        }; */
      },
      MFC: function(args, callback, headers, req) {
        /*
          args = {
                 mfcRequest of type  {
                         orbitalConnectionUsername of type xsd:string
                         orbitalConnectionPassword of type xsd:string
                         version of type xsd:string
                         orderID of type xsd:string
                         amount of type xsd:string
                         taxInd of type xsd:string
                         taxAmount of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         terminalID of type xsd:string
                         txRefNum of type xsd:string
                         retryTrace of type xsd:string
                         pCardOrderID of type xsd:string
                         pCardDestZip of type xsd:string
                         pCardDestName of type xsd:string
                         pCardDestAddress of type xsd:string
                         pCardDestAddress2 of type xsd:string
                         pCardDestCity of type xsd:string
                         pCardDestStateCd of type xsd:string
                         amexTranAdvAddn1 of type xsd:string
                         amexTranAdvAddn2 of type xsd:string
                         amexTranAdvAddn3 of type xsd:string
                         amexTranAdvAddn4 of type xsd:string
                         pCard3FreightAmt of type xsd:string
                         pCard3DutyAmt of type xsd:string
                         pCard3DestCountryCd of type xsd:string
                         pCard3ShipFromZip of type xsd:string
                         pCard3DiscAmt of type xsd:string
                         pCard3VATtaxAmt of type xsd:string
                         pCard3VATtaxRate of type xsd:string
                         pCard3AltTaxInd of type xsd:string
                         pCard3AltTaxAmt of type xsd:string
                         pCard3LineItemCount of type xsd:string
                         pCard3LineItems of type  {
                                 item[] of type  {
                                         pCard3DtlIndex of type xsd:string
                                         pCard3DtlDesc of type xsd:string
                                         pCard3DtlProdCd of type xsd:string
                                         pCard3DtlQty of type xsd:string
                                         pCard3DtlUOM of type xsd:string
                                         pCard3DtlTaxAmt of type xsd:string
                                         pCard3DtlTaxRate of type xsd:string
                                         pCard3Dtllinetot of type xsd:string
                                         pCard3DtlDisc of type xsd:string
                                         pCard3DtlCommCd of type xsd:string
                                         pCard3DtlUnitCost of type xsd:string
                                         pCard3DtlGrossNet of type xsd:string
                                         pCard3DtlTaxType of type xsd:string
                                         pCard3DtlDiscInd of type xsd:string
                                         pCard3DtlDebitInd of type xsd:string
                                         targetNSAlias of type ns
                                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                                   }
                                 targetNSAlias of type ns
                                 targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                           }
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }
          }
        */
        //
        // Your code
        //
        /* return {
                 return of type  {
                         version of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         terminalID of type xsd:string
                         orderID of type xsd:string
                         txRefNum of type xsd:string
                         txRefIdx of type xsd:string
                         splitTxRefIdx of type xsd:string
                         amount of type xsd:string
                         respDateTime of type xsd:string
                         procStatus of type xsd:string
                         procStatusMessage of type xsd:string
                         approvalStatus of type xsd:string
                         respCode of type xsd:string
                         avsRespCode of type xsd:string
                         authorizationCode of type xsd:string
                         respCodeMessage of type xsd:string
                         hostRespCode of type xsd:string
                         hostAVSRespCode of type xsd:string
                         retryTrace of type xsd:string
                         retryAttempCount of type xsd:string
                         lastRetryDate of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }

        }; */
      },
      Reversal: function(args, callback, headers, req) {
        /*
          args = {
                 reversalRequest of type  {
                         orbitalConnectionUsername of type xsd:string
                         orbitalConnectionPassword of type xsd:string
                         version of type xsd:string
                         txRefNum of type xsd:string
                         txRefIdx of type xsd:string
                         adjustedAmount of type xsd:string
                         orderID of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         terminalID of type xsd:string
                         reversalRetryNumber of type xsd:string
                         retryTrace of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }
          }
        */
        //
        // Your code
        //
        /* return {
                 return of type  {
                         version of type xsd:string
                         outstandingAmt of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         terminalID of type xsd:string
                         orderID of type xsd:string
                         txRefNum of type xsd:string
                         txRefIdx of type xsd:string
                         respDateTime of type xsd:string
                         procStatus of type xsd:string
                         procStatusMessage of type xsd:string
                         retryTrace of type xsd:string
                         retryAttempCount of type xsd:string
                         lastRetryDate of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }

        }; */
      },
      EndOfDay: function(args, callback, headers, req) {
        /*
          args = {
                 endOfDayRequest of type  {
                         orbitalConnectionUsername of type xsd:string
                         orbitalConnectionPassword of type xsd:string
                         version of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         terminalID of type xsd:string
                         settleRejectedHoldingBin of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }
          }
        */
        //
        // Your code
        //
        /* return {
                 return of type  {
                         version of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         terminalID of type xsd:string
                         procStatus of type xsd:string
                         batchSeqNum of type xsd:string
                         procStatusMessage of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }

        }; */
      },
      ProfileAdd: function(args, callback, headers, req) {
        /*
          args = {
                 profileAddRequest of type  {
                         orbitalConnectionUsername of type xsd:string
                         orbitalConnectionPassword of type xsd:string
                         version of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         customerName of type xsd:string
                         customerRefNum of type xsd:string
                         customerAddress1 of type xsd:string
                         customerAddress2 of type xsd:string
                         customerCity of type xsd:string
                         customerState of type xsd:string
                         customerZIP of type xsd:string
                         customerEmail of type xsd:string
                         customerPhone of type xsd:string
                         customerCountryCode of type xsd:string
                         customerProfileOrderOverideInd of type xsd:string
                         customerProfileFromOrderInd of type xsd:string
                         orderDefaultDescription of type xsd:string
                         orderDefaultAmount of type xsd:string
                         customerAccountType of type xsd:string
                         ccAccountNum of type xsd:string
                         ccExp of type xsd:string
                         ecpCheckDDA of type xsd:string
                         ecpBankAcctType of type xsd:string
                         ecpCheckRT of type xsd:string
                         ecpDelvMethod of type xsd:string
                         switchSoloCardStartDate of type xsd:string
                         switchSoloIssueNum of type xsd:string
                         mbType of type xsd:string
                         mbOrderIdGenerationMethod of type xsd:string
                         mbRecurringStartDate of type xsd:string
                         mbRecurringEndDate of type xsd:string
                         mbRecurringNoEndDateFlag of type xsd:string
                         mbRecurringMaxBillings of type xsd:string
                         mbRecurringFrequency of type xsd:string
                         mbMicroPaymentMaxDollarValue of type xsd:string
                         mbMicroPaymentMaxBillingDays of type xsd:string
                         mbMicroPaymentMaxTransactions of type xsd:string
                         mbDeferredBillDate of type xsd:string
                         mcSecureCodeAAV of type xsd:string
                         softDescMercName of type xsd:string
                         softDescProdDesc of type xsd:string
                         softDescMercCity of type xsd:string
                         softDescMercPhone of type xsd:string
                         softDescMercURL of type xsd:string
                         softDescMercEmail of type xsd:string
                         euddBankSortCode of type xsd:string
                         euddCountryCode of type xsd:string
                         euddRibCode of type xsd:string
                         status of type xsd:string
                         debitBillerReferenceNumber of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }
          }
        */
        //
        // Your code
        //
        /* return {
                 return of type  {
                         version of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         customerName of type xsd:string
                         customerRefNum of type xsd:string
                         profileAction of type xsd:string
                         procStatus of type xsd:string
                         procStatusMessage of type xsd:string
                         customerAddress1 of type xsd:string
                         customerAddress2 of type xsd:string
                         customerCity of type xsd:string
                         customerState of type xsd:string
                         customerZIP of type xsd:string
                         customerEmail of type xsd:string
                         customerPhone of type xsd:string
                         customerCountryCode of type xsd:string
                         profileOrderOverideInd of type xsd:string
                         orderDefaultDescription of type xsd:string
                         orderDefaultAmount of type xsd:string
                         customerAccountType of type xsd:string
                         ccAccountNum of type xsd:string
                         ccExp of type xsd:string
                         ecpCheckDDA of type xsd:string
                         ecpBankAcctType of type xsd:string
                         ecpCheckRT of type xsd:string
                         ecpDelvMethod of type xsd:string
                         switchSoloCardStartDate of type xsd:string
                         switchSoloIssueNum of type xsd:string
                         mbType of type xsd:string
                         mbOrderIdGenerationMethod of type xsd:string
                         mbRecurringStartDate of type xsd:string
                         mbRecurringEndDate of type xsd:string
                         mbRecurringNoEndDateFlag of type xsd:string
                         mbRecurringMaxBillings of type xsd:string
                         mbRecurringFrequency of type xsd:string
                         mbMicroPaymentMaxDollarValue of type xsd:string
                         mbMicroPaymentMaxBillingDays of type xsd:string
                         mbMicroPaymentMaxTransactions of type xsd:string
                         mbDeferredBillDate of type xsd:string
                         mbMicroPaymentDaysLeft of type xsd:string
                         mbMicroPaymentDollarsLeft of type xsd:string
                         mbStatus of type xsd:string
                         mcSecureCodeAAV of type xsd:string
                         softDescMercName of type xsd:string
                         softDescProdDesc of type xsd:string
                         softDescMercCity of type xsd:string
                         softDescMercPhone of type xsd:string
                         softDescMercURL of type xsd:string
                         softDescMercEmail of type xsd:string
                         euddBankSortCode of type xsd:string
                         euddCountryCode of type xsd:string
                         euddRibCode of type xsd:string
                         status of type xsd:string
                         debitBillerReferenceNumber of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }

        }; */
      },
      ProfileChange: function(args, callback, headers, req) {
        /*
          args = {
                 profileChangeRequest of type  {
                         orbitalConnectionUsername of type xsd:string
                         orbitalConnectionPassword of type xsd:string
                         version of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         customerName of type xsd:string
                         customerRefNum of type xsd:string
                         customerAddress1 of type xsd:string
                         customerAddress2 of type xsd:string
                         customerCity of type xsd:string
                         customerState of type xsd:string
                         customerZIP of type xsd:string
                         customerEmail of type xsd:string
                         customerPhone of type xsd:string
                         customerCountryCode of type xsd:string
                         customerProfileOrderOverideInd of type xsd:string
                         orderDefaultDescription of type xsd:string
                         orderDefaultAmount of type xsd:string
                         customerAccountType of type xsd:string
                         ccAccountNum of type xsd:string
                         ccExp of type xsd:string
                         ecpCheckDDA of type xsd:string
                         ecpBankAcctType of type xsd:string
                         ecpCheckRT of type xsd:string
                         ecpDelvMethod of type xsd:string
                         switchSoloCardStartDate of type xsd:string
                         switchSoloIssueNum of type xsd:string
                         mbType of type xsd:string
                         mbOrderIdGenerationMethod of type xsd:string
                         mbRecurringStartDate of type xsd:string
                         mbRecurringEndDate of type xsd:string
                         mbRecurringNoEndDateFlag of type xsd:string
                         mbRecurringMaxBillings of type xsd:string
                         mbRecurringFrequency of type xsd:string
                         mbDeferredBillDate of type xsd:string
                         mbMicroPaymentMaxDollarValue of type xsd:string
                         mbMicroPaymentMaxBillingDays of type xsd:string
                         mbMicroPaymentMaxTransactions of type xsd:string
                         mbCancelDate of type xsd:string
                         mbRestoreDate of type xsd:string
                         mbRemoveFlag of type xsd:string
                         mcSecureCodeAAV of type xsd:string
                         softDescMercName of type xsd:string
                         softDescProdDesc of type xsd:string
                         softDescMercCity of type xsd:string
                         softDescMercPhone of type xsd:string
                         softDescMercURL of type xsd:string
                         softDescMercEmail of type xsd:string
                         euddBankSortCode of type xsd:string
                         euddCountryCode of type xsd:string
                         euddRibCode of type xsd:string
                         status of type xsd:string
                         debitBillerReferenceNumber of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }
          }
        */
        //
        // Your code
        //
        /* return {
                 return of type  {
                         version of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         customerName of type xsd:string
                         customerRefNum of type xsd:string
                         profileAction of type xsd:string
                         procStatus of type xsd:string
                         procStatusMessage of type xsd:string
                         customerAddress1 of type xsd:string
                         customerAddress2 of type xsd:string
                         customerCity of type xsd:string
                         customerState of type xsd:string
                         customerZIP of type xsd:string
                         customerEmail of type xsd:string
                         customerPhone of type xsd:string
                         customerCountryCode of type xsd:string
                         profileOrderOverideInd of type xsd:string
                         orderDefaultDescription of type xsd:string
                         orderDefaultAmount of type xsd:string
                         customerAccountType of type xsd:string
                         ccAccountNum of type xsd:string
                         ccExp of type xsd:string
                         ecpCheckDDA of type xsd:string
                         ecpBankAcctType of type xsd:string
                         ecpCheckRT of type xsd:string
                         ecpDelvMethod of type xsd:string
                         switchSoloCardStartDate of type xsd:string
                         switchSoloIssueNum of type xsd:string
                         mbType of type xsd:string
                         mbOrderIdGenerationMethod of type xsd:string
                         mbRecurringStartDate of type xsd:string
                         mbRecurringEndDate of type xsd:string
                         mbRecurringNoEndDateFlag of type xsd:string
                         mbRecurringMaxBillings of type xsd:string
                         mbRecurringFrequency of type xsd:string
                         mbMicroPaymentMaxDollarValue of type xsd:string
                         mbMicroPaymentMaxBillingDays of type xsd:string
                         mbMicroPaymentMaxTransactions of type xsd:string
                         mbDeferredBillDate of type xsd:string
                         mbMicroPaymentDaysLeft of type xsd:string
                         mbMicroPaymentDollarsLeft of type xsd:string
                         mbStatus of type xsd:string
                         mcSecureCodeAAV of type xsd:string
                         softDescMercName of type xsd:string
                         softDescProdDesc of type xsd:string
                         softDescMercCity of type xsd:string
                         softDescMercPhone of type xsd:string
                         softDescMercURL of type xsd:string
                         softDescMercEmail of type xsd:string
                         euddBankSortCode of type xsd:string
                         euddCountryCode of type xsd:string
                         euddRibCode of type xsd:string
                         status of type xsd:string
                         debitBillerReferenceNumber of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }

        }; */
      },
      ProfileDelete: function(args, callback, headers, req) {
        /*
          args = {
                 profileDeleteRequest of type  {
                         orbitalConnectionUsername of type xsd:string
                         orbitalConnectionPassword of type xsd:string
                         version of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         customerName of type xsd:string
                         customerRefNum of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }
          }
        */
        //
        // Your code
        //
        /* return {
                 return of type  {
                         version of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         customerName of type xsd:string
                         customerRefNum of type xsd:string
                         profileAction of type xsd:string
                         procStatus of type xsd:string
                         procStatusMessage of type xsd:string
                         customerAddress1 of type xsd:string
                         customerAddress2 of type xsd:string
                         customerCity of type xsd:string
                         customerState of type xsd:string
                         customerZIP of type xsd:string
                         customerEmail of type xsd:string
                         customerPhone of type xsd:string
                         customerCountryCode of type xsd:string
                         profileOrderOverideInd of type xsd:string
                         orderDefaultDescription of type xsd:string
                         orderDefaultAmount of type xsd:string
                         customerAccountType of type xsd:string
                         ccAccountNum of type xsd:string
                         ccExp of type xsd:string
                         ecpCheckDDA of type xsd:string
                         ecpBankAcctType of type xsd:string
                         ecpCheckRT of type xsd:string
                         ecpDelvMethod of type xsd:string
                         switchSoloCardStartDate of type xsd:string
                         switchSoloIssueNum of type xsd:string
                         mbType of type xsd:string
                         mbOrderIdGenerationMethod of type xsd:string
                         mbRecurringStartDate of type xsd:string
                         mbRecurringEndDate of type xsd:string
                         mbRecurringNoEndDateFlag of type xsd:string
                         mbRecurringMaxBillings of type xsd:string
                         mbRecurringFrequency of type xsd:string
                         mbMicroPaymentMaxDollarValue of type xsd:string
                         mbMicroPaymentMaxBillingDays of type xsd:string
                         mbMicroPaymentMaxTransactions of type xsd:string
                         mbDeferredBillDate of type xsd:string
                         mbMicroPaymentDaysLeft of type xsd:string
                         mbMicroPaymentDollarsLeft of type xsd:string
                         mbStatus of type xsd:string
                         mcSecureCodeAAV of type xsd:string
                         softDescMercName of type xsd:string
                         softDescProdDesc of type xsd:string
                         softDescMercCity of type xsd:string
                         softDescMercPhone of type xsd:string
                         softDescMercURL of type xsd:string
                         softDescMercEmail of type xsd:string
                         euddBankSortCode of type xsd:string
                         euddCountryCode of type xsd:string
                         euddRibCode of type xsd:string
                         status of type xsd:string
                         debitBillerReferenceNumber of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }

        }; */
      },
      ProfileFetch: function(args, callback, headers, req) {
        /*
          args = {
                 profileFetchRequest of type  {
                         orbitalConnectionUsername of type xsd:string
                         orbitalConnectionPassword of type xsd:string
                         version of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         customerName of type xsd:string
                         customerRefNum of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }
          }
        */
        //
        // Your code
        //
        /* return {
                 return of type  {
                         version of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         customerName of type xsd:string
                         customerRefNum of type xsd:string
                         profileAction of type xsd:string
                         procStatus of type xsd:string
                         procStatusMessage of type xsd:string
                         customerAddress1 of type xsd:string
                         customerAddress2 of type xsd:string
                         customerCity of type xsd:string
                         customerState of type xsd:string
                         customerZIP of type xsd:string
                         customerEmail of type xsd:string
                         customerPhone of type xsd:string
                         customerCountryCode of type xsd:string
                         profileOrderOverideInd of type xsd:string
                         orderDefaultDescription of type xsd:string
                         orderDefaultAmount of type xsd:string
                         customerAccountType of type xsd:string
                         ccAccountNum of type xsd:string
                         ccExp of type xsd:string
                         ecpCheckDDA of type xsd:string
                         ecpBankAcctType of type xsd:string
                         ecpCheckRT of type xsd:string
                         ecpDelvMethod of type xsd:string
                         switchSoloCardStartDate of type xsd:string
                         switchSoloIssueNum of type xsd:string
                         mbType of type xsd:string
                         mbOrderIdGenerationMethod of type xsd:string
                         mbRecurringStartDate of type xsd:string
                         mbRecurringEndDate of type xsd:string
                         mbRecurringNoEndDateFlag of type xsd:string
                         mbRecurringMaxBillings of type xsd:string
                         mbRecurringFrequency of type xsd:string
                         mbMicroPaymentMaxDollarValue of type xsd:string
                         mbMicroPaymentMaxBillingDays of type xsd:string
                         mbMicroPaymentMaxTransactions of type xsd:string
                         mbDeferredBillDate of type xsd:string
                         mbMicroPaymentDaysLeft of type xsd:string
                         mbMicroPaymentDollarsLeft of type xsd:string
                         mbStatus of type xsd:string
                         mcSecureCodeAAV of type xsd:string
                         softDescMercName of type xsd:string
                         softDescProdDesc of type xsd:string
                         softDescMercCity of type xsd:string
                         softDescMercPhone of type xsd:string
                         softDescMercURL of type xsd:string
                         softDescMercEmail of type xsd:string
                         euddBankSortCode of type xsd:string
                         euddCountryCode of type xsd:string
                         euddRibCode of type xsd:string
                         status of type xsd:string
                         debitBillerReferenceNumber of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }

        }; */
      },
      FlexCache: function(args, callback, headers, req) {
        /*
          args = {
                 flexCacheRequest of type  {
                         orbitalConnectionUsername of type xsd:string
                         orbitalConnectionPassword of type xsd:string
                         version of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         terminalID of type xsd:string
                         ccAccountNum of type xsd:string
                         orderID of type xsd:string
                         amount of type xsd:string
                         ccCardVerifyNum of type xsd:string
                         comments of type xsd:string
                         shippingRef of type xsd:string
                         industryType of type xsd:string
                         flexAutoAuthInd of type xsd:string
                         flexPartialRedemptionInd of type xsd:string
                         flexAction of type xsd:string
                         startAccountNum of type xsd:string
                         activationCount of type xsd:string
                         txRefNum of type xsd:string
                         sequenceNumber of type xsd:string
                         retryTrace of type xsd:string
                         employeeNumber of type xsd:string
                         magStripeTrack1 of type xsd:string
                         magStripeTrack2 of type xsd:string
                         retailTransInfo of type xsd:string
                         priorAuthCd of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }
          }
        */
        //
        // Your code
        //
        /* return {
                 return of type  {
                         version of type xsd:string
                         merchantID of type xsd:string
                         terminalID of type xsd:string
                         orderID of type xsd:string
                         ccAccountNum of type xsd:string
                         startAccountNum of type xsd:string
                         flexAcctBalance of type xsd:string
                         flexAcctPriorBalance of type xsd:string
                         flexAcctExpireDate of type xsd:string
                         cardType of type xsd:string
                         txRefIdx of type xsd:string
                         txRefNum of type xsd:string
                         procStatus of type xsd:string
                         procStatusMessage of type xsd:string
                         approvalStatus of type xsd:string
                         authorizationCode of type xsd:string
                         respCode of type xsd:string
                         batchFailedAcctNum of type xsd:string
                         flexRequestedAmount of type xsd:string
                         flexRedeemedAmt of type xsd:string
                         flexHostTrace of type xsd:string
                         flexAction of type xsd:string
                         respDateTime of type xsd:string
                         autoAuthTxRefIdx of type xsd:string
                         autoAuthTxRefNum of type xsd:string
                         autoAuthProcStatus of type xsd:string
                         autoAuthStatusMsg of type xsd:string
                         autoAuthApprovalStatus of type xsd:string
                         autoAuthFlexRedeemedAmt of type xsd:string
                         autoAuthResponseCodes of type xsd:string
                         autoAuthFlexHostTrace of type xsd:string
                         autoAuthFlexAction of type xsd:string
                         autoAuthRespTime of type xsd:string
                         retryTrace of type xsd:string
                         retryAttempCount of type xsd:string
                         lastRetryDate of type xsd:string
                         cvvRespCode of type xsd:string
                         superBlockID of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }

        }; */
      },
      Unmark: function(args, callback, headers, req) {
        /*
          args = {
                 unmarkRequest of type  {
                         orbitalConnectionUsername of type xsd:string
                         orbitalConnectionPassword of type xsd:string
                         version of type xsd:string
                         merchantID of type xsd:string
                         terminalID of type xsd:string
                         bin of type xsd:string
                         txRefNum of type xsd:string
                         txRefIdx of type xsd:string
                         orderID of type xsd:string
                         retryTrace of type xsd:string
                         retryAttempCount of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }
          }
        */
        //
        // Your code
        //
        /* return {
                 return of type  {
                         version of type xsd:string
                         merchantID of type xsd:string
                         terminalID of type xsd:string
                         bin of type xsd:string
                         orderID of type xsd:string
                         txRefNum of type xsd:string
                         txRefIdx of type xsd:string
                         procStatus of type xsd:string
                         procStatusMessage of type xsd:string
                         retryTrace of type xsd:string
                         retryAttempCount of type xsd:string
                         lastRetryDate of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }

        }; */
      },
      Inquiry: function(args, callback, headers, req) {
        /*
          args = {
                 inquiryRequest of type  {
                         orbitalConnectionUsername of type xsd:string
                         orbitalConnectionPassword of type xsd:string
                         version of type xsd:string
                         merchantID of type xsd:string
                         terminalID of type xsd:string
                         bin of type xsd:string
                         orderID of type xsd:string
                         inquiryRetryNumber of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }
          }
        */
        //
        // Your code
        //
        /* return {
                 return of type  {
                         version of type xsd:string
                         industryType of type xsd:string
                         transType of type xsd:string
                         bin of type xsd:string
                         merchantID of type xsd:string
                         terminalID of type xsd:string
                         cardBrand of type xsd:string
                         orderID of type xsd:string
                         txRefNum of type xsd:string
                         txRefIdx of type xsd:string
                         respDateTime of type xsd:string
                         procStatus of type xsd:string
                         approvalStatus of type xsd:string
                         respCode of type xsd:string
                         avsRespCode of type xsd:string
                         cvvRespCode of type xsd:string
                         authorizationCode of type xsd:string
                         mcRecurringAdvCode of type xsd:string
                         visaVbVRespCode of type xsd:string
                         procStatusMessage of type xsd:string
                         respCodeMessage of type xsd:string
                         hostRespCode of type xsd:string
                         hostAVSRespCode of type xsd:string
                         hostCVVRespCode of type xsd:string
                         retryTrace of type xsd:string
                         retryAttempCount of type xsd:string
                         lastRetryDate of type xsd:string
                         customerRefNum of type xsd:string
                         customerName of type xsd:string
                         profileProcStatus of type xsd:string
                         profileProcStatusMsg of type xsd:string
                         giftCardInd of type xsd:string
                         remainingBalance of type xsd:string
                         requestAmount of type xsd:string
                         redeemedAmount of type xsd:string
                         ccAccountNum of type xsd:string
                         debitBillerReferenceNumber of type xsd:string
                         mbMicroPaymentDaysLeft of type xsd:string
                         mbMicroPaymentDollarsLeft of type xsd:string
                         mbStatus of type xsd:string
                         debitPinSurchargeAmount of type xsd:string
                         debitPinTraceNumber of type xsd:string
                         debitPinNetworkID of type xsd:string
                         targetNSAlias of type ns
                         targetNamespace of type urn:ws.paymentech.net/PaymentechGateway
                   }

        }; */
      }

    }
  }
};