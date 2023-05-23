//
//  BalanceCalc.swift
//  Ledger
//
//  Created by Marcello Prattico on 5/23/23.
//

import Foundation

@objc(BalanceCalc) class BalanceCalc: NSObject {
  @objc static func requiresMainQueueSetup() -> Bool { return true }
  @objc public func calculateBalance(
    _ transactions: NSArray,
    callback: RCTResponseSenderBlock
  ) {
    var balanceTotal: Float = 0;

    if (transactions.count > 0) {
      for item in transactions {
        print(item)
        // balanceTotal = balanceTotal + item
      }
    }


    print(balanceTotal)
    callback([balanceTotal])
  }
}
