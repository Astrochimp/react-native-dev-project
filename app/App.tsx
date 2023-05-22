import React, { useMemo } from "react";
import { Button, SafeAreaView, StatusBar, Text, View, NativeModules } from "react-native";
import { fetchTransactions } from "./transaction-data";
import { TransactionList } from "./transaction-list";
import { Transaction } from "./types";

const App = () => {
  const [transactions, setTransactions] = React.useState([]);

  async function updateTransactions() {
    // TODO: Compute and set balance.
    const response = await fetchTransactions();
    const newTransactions = await response.json();
    setTransactions(newTransactions);
  }

  async function updateNative() {
    console.log('update native');
    const response = await fetchTransactions();
    const newTransactions = await response.json();
    setTransactions(newTransactions);
    NativeModules.BalanceCalc.calculateBalance(newTransactions, (newBalace: Number) => {
      console.log('new balance', newBalace);
    });
  }

  function calculateBalance({
    transactions,
  }: {
    transactions: Transaction[];
  }) {

    let transTotal = 0;
    const balance = transactions.map((trans) => {
      transTotal = trans.amount + transTotal;
    });

    return transTotal;
  }

  const balance = useMemo(() => {
    return calculateBalance({ transactions });
  }, [transactions]);

  const balanceNumberFormat = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    balance,
  );

  return (
    <SafeAreaView>
      <StatusBar />
      <Text
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: 20,
          marginVertical: 20,
        }}>
        Balance: {balance !== undefined ? balanceNumberFormat : "?"}
      </Text>
      <View
        style={{
          paddingBottom: 10,
          marginBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}>

        <Button
          title="Update (JS)"
          onPress={updateTransactions}
        />

        <Button
          title="Update (Native)"
          onPress={updateNative}
        />

      </View>

      {transactions.length > 0 ? (
        <TransactionList transactions={transactions} />
      ) : (
        <View>
          <Text style={{
            width: "100%",
            textAlign: "center",
            fontSize: 20,
            marginVertical: 20,
          }}>
            No transactions
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;
