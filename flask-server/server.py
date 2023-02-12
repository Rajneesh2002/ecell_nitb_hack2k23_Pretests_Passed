import pandas as pd
from flask import Flask
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)



@app.route("/analysis")
def analyze():
    df=pd.read_csv(r"C:\Users\91930\Desktop\Ecell Hackathon\my-app\flask-server\data.csv")
    #high_pac = df.count()
    high_pac = df['PKG (LPA)'].max()

    #total number of students in each branch
    no_cse = 270
    no_civil = 220
    no_mech = 220
    no_elec = 200
    no_ece = 160
    no_mme = 90
    no_chem = 120
    no_arch = 50
    no_plan = 50

    #Average placement branch wise
    pac_cse = (df['PKG (LPA)'].multiply(df["CSE"], axis="index")).sum()/df['CSE'].sum()
    pac_civil = (df['PKG (LPA)'].multiply(df["Civil"], axis="index")).sum()/df['Civil'].sum()
    pac_elec = (df['PKG (LPA)'].multiply(df["Elec"], axis="index")).sum()/df['Elec'].sum()
    pac_mech = (df['PKG (LPA)'].multiply(df["Mech"], axis="index")).sum()/df['Mech'].sum()
    pac_ece = (df['PKG (LPA)'].multiply(df["ECE"], axis="index")).sum()/df['ECE'].sum()
    pac_mme = (df['PKG (LPA)'].multiply(df["MME"], axis="index")).sum()/df['MME'].sum()
    pac_chem = (df['PKG (LPA)'].multiply(df["Chem"], axis="index")).sum()/df['Chem'].sum()
    pac_arch = (df['PKG (LPA)'].multiply(df["Arch"], axis="index")).sum()/df['Arch'].sum()
    pac_plan = (df['PKG (LPA)'].multiply(df["B.Plan"], axis="index")).sum()/df['B.Plan'].sum()

    #Percentage placement branch wise
        
    sel_cse = ((df['CSE'].sum())/no_cse) * 100
    sel_civil = ((df['Civil'].sum())/no_civil) * 100
    sel_elec = ((df['Elec'].sum())/no_elec) * 100
    sel_mech = ((df['Mech'].sum())/no_mech) * 100
    sel_ece = ((df['ECE'].sum())/no_ece) * 100
    sel_mme = ((df['MME'].sum())/no_mme) * 100
    sel_chem = ((df['Chem'].sum())/no_chem) * 100
    sel_arch = ((df['Arch'].sum())/no_arch) * 100
    sel_plan = ((df['B.Plan'].sum())/no_plan) * 100 

    csedf = df[df['CSE'].notnull() & (df['CSE']!=0)]
    max_cse = csedf['PKG (LPA)'].max()

    civdf = df[df['Civil'].notnull() & (df['Civil']!=0)]
    max_civil = civdf['PKG (LPA)'].max()

    mecdf = df[df['Mech'].notnull() & (df['Mech']!=0)]
    max_mech = mecdf['PKG (LPA)'].max()

    ecedf = df[df['ECE'].notnull() & (df['ECE']!=0)]
    max_ece = ecedf['PKG (LPA)'].max()

    mmedf = df[df['MME'].notnull() & (df['MME']!=0)]
    max_mme = mmedf['PKG (LPA)'].max()

    chdf = df[df['Chem'].notnull() & (df['Chem']!=0)]
    max_chem = chdf['PKG (LPA)'].max()

    arcdf = df[df['Arch'].notnull() & (df['Arch']!=0)]
    max_arch = arcdf['PKG (LPA)'].max()

    bpdf = df[df['B.Plan'].notnull() & (df['B.Plan']!=0)]
    max_plan = bpdf['PKG (LPA)'].max()

    allow_cse = int(len(df)-df['CSE'].isna().sum())
    allow_civil = int(len(df)-df['Civil'].isna().sum())
    allow_ece = int(len(df)-df['ECE'].isna().sum())
    allow_mech = int(len(df)-df['Mech'].isna().sum())
    allow_mme = int(len(df)-df['MME'].isna().sum())
    allow_chem = int(len(df)-df['Chem'].isna().sum())
    allow_arch = int(len(df)-df['Arch'].isna().sum())
    allow_plan = int(len(df)-df['B.Plan'].isna().sum())

    mmedf = df[df['MME'].notnull()]
    mme_com = list(mmedf['Company'])

    chemdf = df[df['Chem'].notnull()]
    chem_com = list(chemdf['Company'])

    civiledf = df[df['Civil'].notnull()]
    civil_com = list(civiledf['Company'])

    elecdf = df[df['Elec'].notnull()]
    elec_com = list(elecdf['Company'])

    ecedf = df[df['ECE'].notnull()]
    ece_com = list(ecedf['Company'])

    csedf = df[df['CSE'].notnull()]
    cse_com = list(csedf['Company'])

    archdf = df[df['Arch'].notnull()]
    arch_com = list(archdf['Company'])

    plandf = df[df['B.Plan'].notnull()]
    plan_com = list(plandf['Company'])



    result = {

        "high_pac": high_pac,
        "no_cse": no_cse,
        "no_civil": no_civil,
        "no_elec": no_elec,
        "no_mech": no_mech,
        "no_ece": no_ece,
        "no_mme": no_mme,
        "no_chem": no_chem,
        "no_arch": no_arch,
        "no_plan": no_plan,

        "pac_cse": pac_cse,
        "pac_civil": pac_civil,
        "pac_elec": pac_elec,
        "pac_mech": pac_mech,
        "pac_ece": pac_ece,
        "pac_mme": pac_mme,
        "pac_chem": pac_chem,
        "pac_arch": pac_arch,
        "pac_plan": pac_plan,

        "sel_cse" :sel_cse ,
        "sel_civil" :sel_civil ,
        "sel_elec" :sel_elec ,
        "sel_mech" :sel_mech ,
        "sel_ece" :sel_ece ,
        "sel_mme" :sel_mme ,
        "sel_chem" :sel_chem ,
        "sel_arch" :sel_arch ,
        "sel_plan" :sel_plan ,

        "max_cse":max_cse,  
        "max_civil":max_civil, 
        "max_mech":max_mech, 
        "max_ece":max_ece, 
        "max_mme":max_mme, 
        "max_chem":max_chem,  
        "max_arch":max_arch, 
        "max_plan":max_plan ,

        "allow_cse":allow_cse, 
        "allow_civil":allow_civil, 
        "allow_ece":allow_ece, 
        "allow_mech":allow_mech, 
        "allow_mme":allow_mme, 
        "allow_chem":allow_chem ,
        "allow_arch":allow_arch, 
        "allow_plan":allow_plan ,

        "mme_com":mme_com,
        "chem_com":chem_com,
        "civil_com":civil_com,
        "elec_com":elec_com,
        "ece_com":ece_com,
        "cse_com":cse_com,
        "arch_com":arch_com,
        "plan_com":plan_com



    }
    return jsonify(result)
    
if __name__ == "__main__":
    app.run(debug=True)