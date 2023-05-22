import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";

import { TransactionListItem } from "./transaction-list-item";
import { Transaction } from "./types";

export const TransactionList = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {

  return (
    <View>
      <Text
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: 20,
          marginBottom: 10,
        }}
      >
        Transactions
      </Text>
      <FlatList
        data={transactions.reverse()}
        keyExtractor={transaction => `${transaction.id}-${transaction.amount}`}
        renderItem={tra => {
          return (
            <TransactionListItem transaction={tra.item} />
          );
        }}
      />
    </View>
  );
};
