from django.shortcuts import render

data = dict()
def get_user(request):
    global data
    if 'user' in request.session:
        user = request.session['user']
        link1 = 'Выход'
        link2 = 'Профиль'
    else:
        user = 'Гость'
        link1 = 'Вход'
        link2 = 'Регистрация'
    data['user'] = user
    data['link1'] = link1
    data['link2'] = link2

def index(request):
    get_user(request)
    return render(request, 'home/main.html', context=data)

def about(request):
    get_user(request)
    return render(request, 'home/about.html', context=data)

def contact(request):
    get_user(request)
    return render(request, 'home/contact.html', context=data)
