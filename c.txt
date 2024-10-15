Experiment 1: Arithmetic Operations
activity_main.xml:
xml
Copy code
<?xml version="1.0" encoding="utf-8"?> 
<androidx.constraintlayout.widget.ConstraintLayout 
xmlns:android="http://schemas.android.com/apk/res/android" 
    xmlns:app="http://schemas.android.com/apk/res-auto" 
    xmlns:tools="http://schemas.android.com/tools" 
    android:layout_width="match_parent" 
    android:layout_height="match_parent" 
    tools:context=".MainActivity"> 

    <EditText 
        android:id="@+id/aBox" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:ems="10" 
        android:hint="Enter a Value" 
        android:inputType="text" 
        app:layout_constraintStart_toStartOf="parent" 
        app:layout_constraintTop_toTopOf="parent" /> 

    <EditText 
        android:id="@+id/bBox" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:ems="10" 
        android:hint="Enter b Value" 
        android:inputType="text" 
        app:layout_constraintTop_toBottomOf="@+id/aBox" /> 

    <Button 
        android:id="@+id/addBtn" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="+" 
        app:layout_constraintTop_toBottomOf="@+id/bBox" /> 

    <Button 
        android:id="@+id/subBtn" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="-" 
        app:layout_constraintTop_toBottomOf="@+id/addBtn" /> 

    <Button 
        android:id="@+id/mulBtn" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="*" 
        app:layout_constraintTop_toBottomOf="@+id/subBtn" /> 

    <Button 
        android:id="@+id/divBtn" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="/" 
        app:layout_constraintTop_toBottomOf="@+id/mulBtn" /> 

    <TextView 
        android:id="@+id/result" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Result: " 
        app:layout_constraintTop_toBottomOf="@+id/divBtn" /> 

</androidx.constraintlayout.widget.ConstraintLayout>
MainActivity.java:
java
Copy code
package com.example.arith;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    EditText aval, bval;
    Button add, sub, mul, div;
    TextView res;
    Double a, b;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        aval = findViewById(R.id.aBox);
        bval = findViewById(R.id.bBox);
        add = findViewById(R.id.addBtn);
        sub = findViewById(R.id.subBtn);
        mul = findViewById(R.id.mulBtn);
        div = findViewById(R.id.divBtn);
        res = findViewById(R.id.result);

        add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                a = Double.parseDouble(aval.getText().toString());
                b = Double.parseDouble(bval.getText().toString());
                res.setText("Result: " + (a + b));
            }
        });

        sub.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                a = Double.parseDouble(aval.getText().toString());
                b = Double.parseDouble(bval.getText().toString());
                res.setText("Result: " + (a - b));
            }
        });

        mul.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                a = Double.parseDouble(aval.getText().toString());
                b = Double.parseDouble(bval.getText().toString());
                res.setText("Result: " + (a * b));
            }
        });

        div.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                a = Double.parseDouble(aval.getText().toString());
                b = Double.parseDouble(bval.getText().toString());
                if (b != 0) {
                    res.setText("Result: " + (a / b));
                } else {
                    res.setText("Division not possible");
                }
            }
        });
    }
}
Experiment 2: BMI Calculator
activity_main.xml:
xml
Copy code
<?xml version="1.0" encoding="utf-8"?> 
<androidx.constraintlayout.widget.ConstraintLayout 
xmlns:android="http://schemas.android.com/apk/res/android" 
    xmlns:app="http://schemas.android.com/apk/res-auto" 
    xmlns:tools="http://schemas.android.com/tools" 
    android:layout_width="match_parent" 
    android:layout_height="match_parent" 
    tools:context=".MainActivity"> 

    <TextView 
        android:id="@+id/header" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="BMI Calculator" 
        android:textSize="48dp" 
        android:textStyle="bold" 
        app:layout_constraintStart_toStartOf="parent" 
        app:layout_constraintTop_toTopOf="parent" /> 

    <TextView 
        android:id="@+id/wtLbl" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Weight (in Kg)" 
        android:textStyle="bold" 
        app:layout_constraintTop_toBottomOf="@+id/header" /> 

    <EditText 
        android:id="@+id/wtBox" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:ems="10" 
        android:hint="Enter Weight" 
        android:inputType="text" /> 

    <TextView 
        android:id="@+id/htLbl" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Height (in Cm)" 
        android:textStyle="bold" 
        app:layout_constraintTop_toBottomOf="@+id/wtLbl" /> 

    <EditText 
        android:id="@+id/htBox" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:ems="10" 
        android:hint="Enter Height" 
        android:inputType="text" /> 

    <Button 
        android:id="@+id/calcBtn" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Calculate" 
        app:layout_constraintTop_toBottomOf="@+id/htBox" /> 

    <TextView 
        android:id="@+id/result" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        app:layout_constraintTop_toBottomOf="@+id/calcBtn" /> 

</androidx.constraintlayout.widget.ConstraintLayout>
MainActivity.java:
java
Copy code
package com.example.bmicalc;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    EditText wtval, htval;
    Button btn;
    TextView res;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        wtval = findViewById(R.id.wtBox);
        htval = findViewById(R.id.htBox);
        btn = findViewById(R.id.calcBtn);
        res = findViewById(R.id.result);

        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                float wt = Float.parseFloat(wtval.getText().toString());
                float ht_m = Float.parseFloat(htval.getText().toString()) / 100;
                float bmi = wt / (ht_m * ht_m);
                
                if (bmi < 18.5)
                    res.setText("The BMI is: " + bmi + "\nUnderweight");
                else if (bmi >= 18.5 && bmi < 24.9)
                    res.setText("The BMI is: " + bmi + "\nHealthy");
                else if (bmi >= 24.9 && bmi < 30)
                    res.setText("The BMI is: " + bmi + "\nOverweight");
                else
                    res.setText("The BMI is: " + bmi + "\nObese");
            }
        });
    }
}
Experiment 3: Registration Form using AutoCompleteTextView and RadioButton
activity_main.xml:
xml
Copy code
<?xml version="1.0" encoding="utf-8"?> 
<androidx.constraintlayout.widget.ConstraintLayout 
xmlns:android="http://schemas.android.com/apk/res/android" 
    xmlns:app="http://schemas.android.com/apk/res-auto" 
    xmlns:tools="http://schemas.android.com/tools" 
    android:layout_width="match_parent" 
    android:layout_height="match_parent" 
    tools:context=".MainActivity"> 

    <TextView 
        android:id="@+id/header" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Registration Form" 
        android:textSize="34sp" 
        android:textStyle="bold" 
        app:layout_constraintStart_toStartOf="parent" 
        app:layout_constraintTop_toTopOf="parent" /> 

    <TextView 
        android:id="@+id/nameLbl" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Name" 
        android:textStyle="bold" 
        app:layout_constraintTop_toBottomOf="@+id/header" /> 

    <EditText 
        android:id="@+id/NameBox" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:ems="10" 
        android:hint="Enter Name" 
        android:inputType="text" 
        app:layout_constraintTop_toBottomOf="@+id/nameLbl" /> 

    <TextView 
        android:id="@+id/FNameLbl" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Father Name" 
        android:textStyle="bold" 
        app:layout_constraintTop_toBottomOf="@+id/NameBox" /> 

    <EditText 
        android:id="@+id/FNameBox" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:ems="10" 
        android:hint="Enter Father Name" 
        android:inputType="text" 
        app:layout_constraintTop_toBottomOf="@+id/FNameLbl" /> 

    <TextView 
        android:id="@+id/GenderLbl" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Gender" 
        android:textStyle="bold" 
        app:layout_constraintTop_toBottomOf="@+id/FNameBox" /> 

    <RadioGroup 
        android:id="@+id/GenderGroup" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        app:layout_constraintTop_toBottomOf="@+id/GenderLbl"> 

        <RadioButton 
            android:id="@+id/MaleBtn" 
            android:layout_width="wrap_content" 
            android:layout_height="wrap_content" 
            android:text="Male" /> 

        <RadioButton 
            android:id="@+id/FemaleBtn" 
            android:layout_width="wrap_content" 
            android:layout_height="wrap_content" 
            android:text="Female" /> 
    </RadioGroup> 

    <TextView 
        android:id="@+id/PlaceLbl" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Place of Birth" 
        android:textStyle="bold" 
        app:layout_constraintTop_toBottomOf="@+id/GenderGroup" /> 

    <AutoCompleteTextView 
        android:id="@+id/PlaceBox" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:hint="Enter Location" 
        android:inputType="text" /> 

    <Button 
        android:id="@+id/SubmitBtn" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Submit" 
        app:layout_constraintTop_toBottomOf="@+id/PlaceBox" /> 

</androidx.constraintlayout.widget.ConstraintLayout>
MainActivity.java:
java
Copy code
package com.example.registrationformacrg;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.AutoCompleteTextView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    EditText name, fname;
    AutoCompleteTextView places;
    RadioGroup rg;
    RadioButton rb;
    Button btn;
    String[] Locations = {"Bangalore", "Delhi", "Pune", "Bombay", "Chennai", "Hyderabad", "Calcutta"};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        name = findViewById(R.id.NameBox);
        fname = findViewById(R.id.FNameBox);
        places = findViewById(R.id.PlaceBox);
        btn = findViewById(R.id.SubmitBtn);

        ArrayAdapter adapter = new ArrayAdapter(this, android.R.layout.select_dialog_item, Locations);
        places.setThreshold(1);
        places.setAdapter(adapter);

        rg = findViewById(R.id.GenderGroup);
        rg.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup group, int checkedId) {
                rb = findViewById(checkedId);
            }
        });

        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String res1 = "Name: " + name.getText().toString() + "\nFather Name: " + fname.getText().toString() +
                        "\nGender: " + rb.getText() + "\nPlace of Birth: " + places.getText().toString();
                Toast.makeText(MainActivity.this, res1, Toast.LENGTH_SHORT).show();
            }
        });
    }
}
Experiment 4: Course Selection using Spinner
activity_main.xml:
xml
Copy code
<?xml version="1.0" encoding="utf-8"?> 
<androidx.constraintlayout.widget.ConstraintLayout 
xmlns:android="http://schemas.android.com/apk/res/android" 
    xmlns:app="http://schemas.android.com/apk/res-auto" 
    xmlns:tools="http://schemas.android.com/tools" 
    android:layout_width="match_parent" 
    android:layout_height="match_parent" 
    tools:context=".MainActivity"> 

    <TextView 
        android:id="@+id/header" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Electives Selection" 
        android:textSize="34sp" 
        android:textStyle="bold" 
        app:layout_constraintStart_toStartOf="parent" 
        app:layout_constraintTop_toTopOf="parent" /> 

    <TextView 
        android:id="@+id/nameLbl" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Student Name" 
        android:textStyle="bold" 
        app:layout_constraintTop_toBottomOf="@+id/header" /> 

    <EditText 
        android:id="@+id/nameBox" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:ems="10" 
        android:hint="Enter Student Name" 
        android:inputType="text" 
        app:layout_constraintTop_toBottomOf="@+id/nameLbl" /> 

    <TextView 
        android:id="@+id/rollnoLbl" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Roll No" 
        android:textStyle="bold" 
        app:layout_constraintTop_toBottomOf="@+id/nameBox" /> 

    <EditText 
        android:id="@+id/rollnoBox" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:ems="10" 
        android:hint="Enter Roll No" 
        android:inputType="text" 
        app:layout_constraintTop_toBottomOf="@+id/rollnoLbl" /> 

    <TextView 
        android:id="@+id/delbl" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Discipline Elective" 
        android:textStyle="bold" 
        app:layout_constraintTop_toBottomOf="@+id/rollnoBox" /> 

    <Spinner 
        android:id="@+id/electivesBox" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:minHeight="48dp" 
        app:layout_constraintTop_toBottomOf="@+id/delbl" /> 

    <Button 
        android:id="@+id/SubmitBtn" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Submit" 
        app:layout_constraintTop_toBottomOf="@+id/electivesBox" /> 

</androidx.constraintlayout.widget.ConstraintLayout>
MainActivity.java:
java
Copy code
package com.example.deselectionspinner;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    EditText name, rollno;
    Spinner elec;
    TextView res;
    String selectedCourse;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        name = findViewById(R.id.nameBox);
        rollno = findViewById(R.id.rollnoBox);
        elec = findViewById(R.id.electivesBox);
        res = findViewById(R.id.result);

        ArrayAdapter adapter = new ArrayAdapter(this, android.R.layout.simple_spinner_item,
                getResources().getStringArray(R.array.courses));
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        elec.setAdapter(adapter);

        elec.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                selectedCourse = parent.getItemAtPosition(position).toString();
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {
            }
        });
    }

    public void displayDetails(View v) {
        res.setText("Name: " + name.getText().toString() + "\nRoll No: " + rollno.getText().toString() +
                "\nSelected Course: " + selectedCourse);
    }

    public void resetDetails(View v) {
        name.setText("");
        rollno.setText("");
        res.setText("");
    }
}
Experiment 5: Vote Eligibility Check
activity_main.xml:
xml
Copy code
<?xml version="1.0" encoding="utf-8"?> 
<androidx.constraintlayout.widget.ConstraintLayout 
xmlns:android="http://schemas.android.com/apk/res/android" 
    xmlns:app="http://schemas.android.com/apk/res-auto" 
    xmlns:tools="http://schemas.android.com/tools" 
    android:layout_width="match_parent" 
    android:layout_height="match_parent" 
    tools:context=".MainActivity"> 

    <TextView 
        android:id="@+id/header" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Vote Eligibility" 
        android:textSize="24sp" 
        android:textStyle="bold" 
        app:layout_constraintStart_toStartOf="parent" 
        app:layout_constraintTop_toTopOf="parent" /> 

    <TextView 
        android:id="@+id/nameLbl" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="User Name" 
        android:textStyle="bold" 
        app:layout_constraintTop_toBottomOf="@+id/header" /> 

    <EditText 
        android:id="@+id/nameBox" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:ems="10" 
        android:hint="Enter Username" 
        android:inputType="text" 
        app:layout_constraintTop_toBottomOf="@+id/nameLbl" /> 

    <TextView 
        android:id="@+id/aadharLbl" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Aadhar No." 
        android:textStyle="bold" 
        app:layout_constraintTop_toBottomOf="@+id/nameBox" /> 

    <EditText 
        android:id="@+id/aadharBox" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:ems="10" 
        android:hint="Enter Aadhar Number" 
        android:inputType="number" 
        app:layout_constraintTop_toBottomOf="@+id/aadharLbl" /> 

    <TextView 
        android:id="@+id/dobLbl" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Date of Birth" 
        android:textStyle="bold" 
        app:layout_constraintTop_toBottomOf="@+id/aadharBox" /> 

    <EditText 
        android:id="@+id/dateBox" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:ems="10" 
        android:hint="Select Date" 
        android:inputType="date" 
        app:layout_constraintTop_toBottomOf="@+id/dobLbl" /> 

    <Button 
        android:id="@+id/checkBtn" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:text="Check" 
        android:onClick="checkEligibility" 
        app:layout_constraintTop_toBottomOf="@+id/dateBox" /> 

</androidx.constraintlayout.widget.ConstraintLayout>
MainActivity.java:
java
Copy code
package com.example.agecalcdpd;

import androidx.appcompat.app.AppCompatActivity;
import android.app.DatePickerDialog;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.EditText;
import java.util.Calendar;

public class MainActivity extends AppCompatActivity {
    EditText name, num, date;
    Button btn;
    int diff;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        name = findViewById(R.id.nameBox);
        num = findViewById(R.id.aadharBox);
        date = findViewById(R.id.dateBox);

        date.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Calendar c = Calendar.getInstance();
                int pYear = c.get(Calendar.YEAR);
                int pMonth = c.get(Calendar.MONTH);
                int pDate = c.get(Calendar.DATE);

                DatePickerDialog dialog = new DatePickerDialog(MainActivity.this, new DatePickerDialog.OnDateSetListener() {
                    @Override
                    public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
                        date.setText(dayOfMonth + "/" + (month + 1) + "/" + year);
                        diff = pYear - year;
                    }
                }, pYear, pMonth, pDate);
                dialog.show();
            }
        });
    }

    public void checkEligibility(View v) {
        String s_name = name.getText().toString();
        String s_num = num.getText().toString();
        Intent in = new Intent(getApplicationContext(), ResultActivity.class);
        in.putExtra("NAME", s_name);
        in.putExtra("AADHAR", s_num);
        in.putExtra("AGE", diff);
        startActivity(in);
    }
}
activity_result.xml:
xml
Copy code
<?xml version="1.0" encoding="utf-8"?> 
<androidx.constraintlayout.widget.ConstraintLayout 
xmlns:android="http://schemas.android.com/apk/res/android" 
    xmlns:app="http://schemas.android.com/apk/res-auto" 
    xmlns:tools="http://schemas.android.com/tools" 
    android:layout_width="match_parent" 
    android:layout_height="match_parent" 
    tools:context=".ResultActivity"> 

    <TextView 
        android:id="@+id/result" 
        android:layout_width="wrap_content" 
        android:layout_height="wrap_content" 
        android:gravity="center_horizontal" 
        android:textStyle="bold" 
        app:layout_constraintTop_toTopOf="parent" 
        app:layout_constraintStart_toStartOf="parent" 
        app:layout_constraintEnd_toEndOf="parent" 
        app:layout_constraintBottom_toBottomOf="parent" /> 

</androidx.constraintlayout.widget.ConstraintLayout>
ResultActivity.java:
java
Copy code
package com.example.agecalcdpd;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

public class ResultActivity extends AppCompatActivity {
    TextView res;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_result);

        res = findViewById(R.id.result);
        Intent intt = getIntent();
        String r_name = intt.getStringExtra("NAME");
        String r_aadhar = intt.getStringExtra("AADHAR");
        int age = intt.getIntExtra("AGE", 0);

        if (age >= 18) {
            res.setText("Name: " + r_name + "\nAadhar Number: " + r_aadhar + "\nYou are eligible to vote");
        } else {
            res.setText("Name: " + r_name + "\nAadhar Number: " + r_aadhar + "\nYou are not eligible to vote");
        }
    }
}
